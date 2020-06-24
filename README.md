# serverless-api

An AWS API deployed with Serverless CLI

## Getting Started

1. Install Serverless CLI:
    - `npm i -g serverless`
    
## Deployment

1. Create the custom domain:
    - `serverless create_domain --stage <stage_name> --profile <your_profile> --domainName <your_domain>`
2. Package your code:
    - `serverless package --stage <stage_name> --profile <your_profile> --domainName <your_domain>`
3. Deploy your package:
    - `serverless deploy --stage <stage_name> --profile <your_profile> --domainName <your_domain>`
4. Test your endpoint:
    - `curl https://<your_custom_domain>/demo/hello`   

## Teardown

1. Tear down custom domain:
    - `serverless delete_domain --stage <stage_name> --profile <your_profile> --domainName <your_domain>`
1. Teardown Serverless resources
    - `serverless remove --stage <stage_name> --profile <your_profile> --domainName <your_domain>`
