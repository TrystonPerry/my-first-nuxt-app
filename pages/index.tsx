import Head from "next/head";
import styles from "../styles/Home.module.css";
import { usePlugin } from "tinacms";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { useGithubJsonForm } from "react-tinacms-github";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { GetStaticProps } from "next";

export default function Home({ file }) {
  const formOptions = {
    label: "Home Page",
    fields: [{ name: "title", component: "text" }],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <InlineForm form={form}>
      <div className={styles.container}>
        <Head>
          <title>{data.head.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <InlineText name="content.h1" />
          </h1>

          <p className={styles.description}>
            <InlineText name="content.subtitle" />
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
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
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/index.json",
        data: (await import("../content/index.json")).default,
      },
    },
  };
};
