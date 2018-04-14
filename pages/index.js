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
        font-size: 16px;
      }
    `}</style>
    <style jsx>{`
      .root {
        max-width: 760px;
        margin: 0 auto 100px;
      }
      a {
        color: #fff;
      }
      /* AT COMMITIZEN WE WORK ON */
      .work-on {
        height: 34px;
        max-width: 344px;
        font-family: Rambla, sans-serif;
        font-size: 1rem;
        letter-spacing: 10px;
        padding-left: 16px;
        color: #4f4f4f;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
      }
      .responsive,
      .responsible,
      .productive,
      .hear-from-you {
        max-width: 344px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        font-family: Rambla, sans-serif;
        font-size: 1.6rem;
        letter-spacing: 10px;
        color: #f2f2f2;
      }
      .you-know-us {
        height: 34px;
        max-width: 344px;
        font-family: Rambla, sans-serif;
        font-size: 1rem;
        letter-spacing: 10px;
        padding-left: 16px;
        color: #4f4f4f;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (min-width: 500px) {
        .work-on,
        .you-know-us {
          margin-top: 40px;
          max-width: 400px;
          font-size: 1.6rem;
        }
        .responsive,
        .responsible,
        .productive,
        .hear-from-you {
          max-width: 400px;
          font-size: 2.4rem;
        }
      }
    `}</style>

    <article className="who-we-are">
      <h3 className={`work-on`}>AT COMMITIZEN</h3>

      <p className={`responsible`}>WE EMPOWER GROUPS OF INDIVIDUALS</p>
      <p className={`responsive`}>TO TACKLE CHALLENGES THOUGHTFULLY</p>
      <p className={`productive`}>BY BUILDING INCLUSIVE SOFTWARE</p>
      <h3 className={`you-know-us`}>NOW YOU KNOW US</h3>
      <p className={`hear-from-you`}>
        SO <a href="mailto:commitizen@gmail.com">TELL US</a> ABOUT YOU
      </p>
    </article>
  </div>
);
