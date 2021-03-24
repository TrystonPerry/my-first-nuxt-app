import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { usePlugin } from "tinacms";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm } from "react-tinacms-github";
import { InlineForm, InlineText, InlineTextarea } from "react-tinacms-inline";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";

import CustomComponents from "../components/globals";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({ file }) {
  const formOptions = {
    label: file.data.label,
    fields: [],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <InlineForm form={form}>
      <div className="page-wrapper">
        <Head>
          <title>{data.head.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container">
          {data.body.map(({ component, props }) =>
            CustomComponents[component](props)
          )}
        </main>

        <Footer />
      </div>
    </InlineForm>
  );
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/index.json",
      parse: parseJson,
    });
  }

  const data = (await import("../content/index.json")).default;
  const props = data.body[1].props;
  const content = await import("../content/markdown/intro-paragraph.md");
  props.text = matter(content.default).content;

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/index.json",
        data,
      },
    },
  };
};
