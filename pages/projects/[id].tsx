import { backend } from "lib/backend";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPropsContext,
  NextPage
} from "next";
import React from "react";
import dynamic from "next/dynamic";
import { Project } from "types/project";
import matter from "gray-matter";
import showdown from "showdown";

interface Props {
  project: Project;
}

interface Params {
  params: {
    id: string;
  };
}

const ProjectDetail: NextPage<Props> = ({ project }) => {
  const markdown = Buffer.from(project.readMe, "base64").toString();
  const converter = new showdown.Converter({ ghCodeBlocks: true });
  const html = converter.makeHtml(markdown);

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
