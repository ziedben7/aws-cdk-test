#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTestStack } from '../lib/aws-cdk-test-stack';

const app = new cdk.App();
new AwsCdkTestStack(app, 'AwsCdkTestStack', {
  stackName: 'cdk-test-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },

});
