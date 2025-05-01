/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "duck",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: input.stage === 'production' ? 'rjg-production' : 'rjg-dev'
        }
      }
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
    await import("./infra/web");
    const auth = await import("./infra/auth");

    return {
      UserPool: auth.userPool.id,
      Region: aws.getRegionOutput().name,
      IdentityPool: auth.identityPool.id,
      UserPoolClient: auth.userPoolClient.id,
    };
  },
});
