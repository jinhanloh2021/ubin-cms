// ~/strapi-aws-s3/backend/config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:env("DEPLOY_HOOK"),
      apiToken: env("<vercel-api-token>"),
      appFilter: env("your-app-name-on-vercel"),
      teamFilter: env("your-team-id-on-vercel"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
