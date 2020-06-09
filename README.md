# serverless-api

An AWS API deployed with Serverless CLI

## Getting Started

1. Install Serverless CLI:
    - `npm i -g serverless`
    
## Deployment

1. Create the custom domain:
    - `serverless create_domain --stage <stage_name> --profile <your_profile>`
2. Package your code:
    - `serverless package --stage <stage_name> --profile <your_profile>`
3. Deploy your package:
    - `serverless deploy --stage <stage_name> --profile <your_profile>`         

## Teardown

1. Teardown Serverless resources
    - `serverless remove --stage <stage_name> --profile <your_profile>`
