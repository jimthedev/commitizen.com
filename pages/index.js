import Head from "next/head";

export default () => (
  <div className="root">
    <Head>
      <title>Commitizen</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <meta name="description" content="Commitizen Software Development" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@commitizen" />
      <meta name="twitter:title" content="Commitizen" />
      <meta
        name="twitter:description"
        content="Commitizen Software Development"
      />
      <meta name="twitter:creator" content="@commitizen" />

      <meta
        name="twitter:image"
        content="https://pbs.twimg.com/profile_images/655073857733308416/qxl3hPVG_400x400.jpg"
      />

      <meta property="og:title" content="Commitizen Software Development" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="http://www.commitizen.com/" />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/profile_images/655073857733308416/qxl3hPVG_400x400.jpg"
      />
      <meta
        property="og:description"
        content="Commitizen Software Development"
      />
      <meta property="og:site_name" content="Commitizen Software Development" />
      <link
        href="https://fonts.googleapis.com/css?family=Rambla"
        rel="stylesheet"
      />
    </Head>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        background: #000;
      }
    `}</style>
    <style jsx>{`
      .root {
        max-width: 760px;
        margin: 0 auto 100px;
      }
      a {
        color: rgb(0, 0, 238);
      }
      /* AT COMMITIZEN WE WORK ON */
      .work-on {
        height: 34px;
        width: 444px;
        font-family: Rambla, sans-serif;
        font-size: 24px;
        letter-spacing: 10px;
        color: #4f4f4f;
      }
      .work-on strong {
        font-weight: 100;
      }
      .responsive,
      .responsible,
      .productive {
        width: 444px;

        font-family: Rambla, sans-serif;
        font-size: 36px;
        letter-spacing: 10px;

        color: #f2f2f2;
      }
      .responsible {
      }
      .productive {
      }
    `}</style>

    <article className="who-we-are">
      <h3 className={`work-on`}>
        AT <strong>COMMITIZEN</strong> OUR GOALS ARE TO
      </h3>

      <p className={`responsible`}>EMPOWER GROUPS OF INDIVIDUALS</p>
      <p className={`responsive`}>RESPOND TO TECHNOLOGICAL SHIFTS</p>
      <p className={`productive`}>CREATE INCLUSIVE SOFTWARE SOLUTIONS</p>
    </article>
  </div>
);
