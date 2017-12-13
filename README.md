# Azure Functions CI/CD Pipeline sample for Node.js with VSTS

Sample project for Azure Functions CI/CD pipeline using Node.js with VSTS.

You can read a tutorial to create CI/CD pipeline for Azure Functions(Node.js).

* [Azure Functions CI/CD pipeline for Node.js using VSTS](https://blogs.technet.microsoft.com/livedevopsinjapan/2017/12/13/azure-functions-cicd-pipeline-for-node-js-using-vsts/)

This repo includes FunctionApp with two Azure Functions sample, one Unit testing, package.json, and Build/Release pipeline json files. 

# Usage

You can create a CI/CD pipeline for your VSTS account. 
Folk this repo and to enjoy learning Azure Functions CI/CD pipeline with Node.js. for more detail refer the blog post.

* [Azure Functions CI/CD pipeline for Node.js using VSTS](https://blogs.technet.microsoft.com/livedevopsinjapan/2017/12/13/azure-functions-cicd-pipeline-for-node-js-using-vsts/)

If you want to run this project locally, after creating FunctionApp on your Azure portal, then, Install Azure Functions CLI. Please refer this repo.

* [Azure Functions CLI](https://github.com/Azure/azure-functions-cli)

If you are using Mac,

```
npm i -g azure-functions-core-tools
```

Then, on this root dir of this repo

```
func azure login
func azure functionapp fetch-app-settings YOUR_FUNCTION_APP_NAME
func host start
```
It starts this Function App on your localmachine.


# Structure

I'd like to explain the directory structure.

## Pipeline 

This directory includes json/yaml files which you can import on your VSTS account. 

| Filename | description |
|:---------|:------------|
| Node.CI.json| Build Definition file |
| Node.Release.json | Relase Definition file |
| build.yaml | Build Definition which you can use YAML task |

## Scheduler function

HttpTrigger node function with StorageQueue bindings. Also, this functions require express package for sumilate large library import.

## Worker function

Storage Queue Trigger function. This function just emit a log file.

## Tests

An example of unit testing for node based Azure Functions. It inlcudes mocking and spying the object. 

## package.json

It includes several npm scripts.

| Script name | description |
|:------------|:------------|
|npm test | execute unit tests |
|npm run report | execute unit tests and create a junit-style test results |
|npm run security-check | execute security check using nsp|
|npm run pack | Bundle functions using funcpack |
|npm run lint | Linting using ESlint |




