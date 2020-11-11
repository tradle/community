# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

Local install and static file test
```console
mkdir Docusaurus
cd Docusaurus/
npx @docusaurus/init@next init tradle classic
npm run start
```

## Local Development

Local build and website test
```console
npm run build
npm run serve
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.


## Deployment

```console
aws s3 sync ./build s3://tradle.io/community --delete --exclude ".DS_Store"
```
