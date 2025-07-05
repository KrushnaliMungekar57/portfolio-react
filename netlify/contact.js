// netlify/functions/contact.js

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);

  // You can log or process the form data here
  console.log("Received form submission:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      message: "Message sent successfully",
    }),
  };
};
