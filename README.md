## Website

The website is available at [https://commitizen.com](https://commitizen.com).

## Contributing

### Prerequisites

1.  Node 8+ / NPM 5+ installed using [nvm](https://github.com/creationix/nvm)
1.  Git with `brew install git`
1.  Zeit [Now CLI](https://github.com/zeit/now-cli) with `brew install now`

### Getting the code

1.  Fork the Github repo
1.  Clone the forked repo using the url
1.  Run `cd commitizen.com` to switch into the directory
1.  Run `npm install` to install dependencies

### Local development

1.  Run `npm run dev`
1.  Once you are happy with your changes git add, git commit, git push, then put in a pull request.

### Deployment (if you have access)

1.  Run `now` and you will be given a url for your deployment.
1.  If everything looks good at the url provided by Zeit Now then run `now alias <URL> commitizen.com`
1.  Clean up any unaliased deployments with `npx now-purge`
