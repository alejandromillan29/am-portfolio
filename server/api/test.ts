export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  return {
    success: true,
    message: {
      toEmail: config.sendgridToEmail,
      fromEmail: config.sendgridFromEmail,
      templateId: config.sendgridTemplateId,
      // apiKey: config.sendgridApiKey,
    },
  };
});
