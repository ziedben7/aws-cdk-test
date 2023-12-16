import { NatProvider, SubnetType } from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';

export class NatGateway extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);


  }
}
