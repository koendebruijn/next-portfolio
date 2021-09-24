import showdown from "showdown";

export const useReadme = (encodedReadme: string) => {
  const markdown = Buffer.from(encodedReadme, "base64").toString();
  const converter = new showdown.Converter({ ghCodeBlocks: true });

  return converter.makeHtml(markdown);
};
