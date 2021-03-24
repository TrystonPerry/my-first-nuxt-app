import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { usePlugin, ModalProvider } from "tinacms";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm } from "react-tinacms-github";
import { InlineBlocks, InlineForm } from "react-tinacms-inline";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";

import CustomComponents from "../components/globals";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Hero, { hero_template } from "../components/Hero";

const PAGE_BLOCKS = {
  Hero: {
    Component: Hero,
    template: hero_template,
  },
};

export default function Home({ file }) {
  // const formOptions = {
  //   label: file.data.label,
  //   fields: [
  //     {
  //       name: "",
  //       label: "",
  //       component: "Text"
  //     }
  //   ],
  // };

  const [data, form] = useGithubJsonForm(file);
  usePlugin(form);

  return (
    <ModalProvider>
      <InlineForm form={form}>
        <div className="page-wrapper">
          <Head>
            <title>{data.head.title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />

          <main className="container">
            <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
            {/* {data.body.map(({ component, props }, index) => {
            return (
              <div key={index}>
                {CustomComponents[component]({
                  index,
                  name: "body",
                  data: props,
                })}
              </div>
            );
          })} */}
          </main>

          <Footer />
        </div>
      </InlineForm>
    </ModalProvider>
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
  // const props = data.body[1].props;
  // const content = await import("../content/markdown/intro-paragraph.md");
  // props.text = matter(content.default).content;

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
