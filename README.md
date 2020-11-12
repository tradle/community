# Website

This is our community website for our documentation and it's built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

To install locally and test static files
```console
mkdir Docusaurus
cd Docusaurus/
npx @docusaurus/init@next init tradle classic
npm run start
```

## Local config
To test this site config, pull the repository and make a change to baseUrl in docusaurus.config.js from '/community/' to '/'


## Local Development

Local build and website test
```console
npm run build
npm run serve
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.


## Deployment

Change the docusaurus.config.js baseUrl back to '/community/', build again then sync to S3
```console
aws s3 sync ./build s3://tradle.io/community --delete --exclude ".DS_Store"
```
