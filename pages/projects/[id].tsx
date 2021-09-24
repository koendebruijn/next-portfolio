import { backend } from "lib/backend";
import { GetServerSideProps, GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { Project } from "types/project";
import { useReadme } from "hooks/useReadme";

interface Props {
  project: Project;
}

interface Params {
  params: {
    id: string;
  };
}

const ProjectDetail: NextPage<Props> = ({ project }) => {
  const html = useReadme(project.readMe);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
