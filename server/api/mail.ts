import sgMail from "@sendgrid/mail";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  sgMail.setApiKey(config.sendgridApiKey);

  const body = await readBody<{
    fullName: string;
    email: string;
    message: string;
  }>(event);

  if (!body.email || !body.fullName) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields: fullName or email",
    });
  }

  const msg = {
    to: config.sendgridToEmail,
    from: config.sendgridFromEmail,
    templateId: config.sendgridTemplateId,
    dynamicTemplateData: {
      fullName: body.fullName,
      company: "",
      email: body.email,
      service: body.message,
      phone: "",
    },
  };

  try {
    await sgMail.send(msg);
    return { success: true, message: "Email sent successfully!" };
  } catch (error: any) {
    console.error("SendGrid error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error sending email",
      data: error.response?.body || error.message,
    });
  }
});
