import { backend } from "lib/backend";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPropsContext,
  NextPage
} from "next";
import React from "react";
import { Project } from "types/project";

interface Props {
  project: Project;
}

interface Params {
  params: {
    id: string;
  };
}

const ProjectDetail: NextPage<Props> = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a
        href={project.html_url}
        style={{ display: "block" }}
        target='_blank'
        rel='noreferrer'
      >
        Click here for the code
      </a>
      {project.homepage && (
        <a
          style={{ display: "block" }}
          href={project.homepage}
          target='_blank'
          rel='noreferrer'
        >
          Click here to see the demo
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context as Params;

  const project = await backend.getProjectById(params.id);

  return {
    props: {
      project
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await backend.getProjects();

  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};
