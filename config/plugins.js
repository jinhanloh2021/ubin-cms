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
      deployHook: env("DEPLOY_HOOK"),
      apiToken: env("VERCEL_API_TOKEN"),
      appFilter: env("VERCEL_APP_NAME"),
      teamFilter: env("VERCEL_TEAM_ID"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
