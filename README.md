Boilerplate for getting quickly started with a new TypeScript Lambda function using the Serverless framework.

## Quick start

```
# install the Serverless framework (if not already installed)
npm i serverless -g            


# Set up credentials (skip this if you've already got them set up in ~/.aws/credentials)
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY

# Start a development server
serverless offline start 

# Deploy 
serverless deploy --region eu-west-1

```