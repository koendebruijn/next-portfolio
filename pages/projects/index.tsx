import { backend } from "lib/backend";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React from "react";
import Link from "next/link";
import { Project } from "types/project";

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
          <a style={{ display: "block" }}>{project.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await backend.getProjects();

  return {
    props: {
      projects
    },
    revalidate: 10
  };
};
