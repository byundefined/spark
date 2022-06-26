import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 40 95" fill="none">
    <path
      d="M9.37552 2.58017L23.4803 0.0392334C24.8078 -0.199904 26.0784 0.67886 26.3183 2.00201C26.364 2.25439 26.3695 2.51239 26.3345 2.76648L21.7791 35.8056C21.5955 37.1377 22.5299 38.3659 23.8663 38.549C24.1239 38.5843 24.3855 38.5783 24.6412 38.5314L37.1152 36.2421C38.4419 35.9986 39.7153 36.8732 39.9596 38.1956C40.0342 38.5994 40.0051 39.0154 39.8751 39.405L21.3192 95V57.6145C21.3192 56.2699 20.2257 55.1799 18.8767 55.1799C18.7357 55.1799 18.5949 55.1921 18.4559 55.2163L2.86331 57.9345C1.53451 58.1662 0.268919 57.2803 0.0365218 55.9558C-0.00328139 55.7289 -0.0105957 55.4976 0.0148028 55.2687L5.38891 6.83644C5.62656 4.69473 7.24819 2.9634 9.37552 2.58017Z"
      fill="black"
    />
  </svg>
);

export default {
  projectLink: "https://github.com/byundefined/spark",
  docsRepositoryBase:
    "https://github.com/byundefined/spark/blob/main/website/pages",
  search: true,
  titleSuffix: "",
  unstable_flexsearch: true,
  unstable_faviconGlyph: "⚡️",
  floatTOC: true,
  logo: () => {
    const { route } = useRouter();
    return (
      <>
        <Logo height={25} />

        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title="SPARK"
          style={{ whiteSpace: "nowrap" }}
        >
          SPARK
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const ogImage =
      "https://raw.githubusercontent.com/byundefined/spark/main/assets/images/logo.jpg";

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Component toolkit to rapidly build high-quality web apps using Supabase"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Component toolkit to rapidly build high-quality web apps using Supabase"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@By_Undefined" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="og:title" content={title ? title + " – Spark" : "Spark"} />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="SPARK" />
      </>
    );
  },
  footerText: ({ locale }) => {
    return (
      <p className="no-underline text-current font-semibold">
        Supported by{" "}
        <a
          href="https://thisisundefined.com"
          target="_blank"
          rel="noopener"
          className="no-underline font-semibold"
        >
          Undefined
        </a>
      </p>
    );
  },
  footerEditLink: () => {
    const { route } = useRouter();

    return "Edit this page on GitHub";
  },
  gitTimestamp: false,
};
