# DevOps task

See the [example app here](./example-app/), it is a [NextJS](https://nextjs.org/) application (minimally adjusted template). If you are unfamiliar with it - read about the build & deployment process [here @nextjs.org/docs](https://nextjs.org/docs/deployment).

The `example-app` expects a single environment variable `NEXT_PUBLIC_SHOW_ME` that must be populated with any content.

Your task is to deploy this app to AWS so that the first page is rendered correctly & contains the content of the environment variable.

## Submission

We expect to receive the following:

- a link to the deployed application (or a video recording of it in your browser)
- link to the GitHub repository that contains:
  - code for the deployment (we prefer a solution in Terraform, CloudFormation or any other IaC tool)
  - `README.md` that contains:
    - brief instructions on how to use the code
    - information on what you would add or suggest (or maybe do completely differently) to make this solution production ready

## Evaluation

We will take these criteria into account when evaluating your solution:

- code readability
- developer experience (how satisfied with the development process & speed will be the end users - developers)
