

// const LOCAL = "http://localhost:8080";


export const doSubmitContactForm = async (message) => {
  const HEROKU = "https://chimp-red-2020.herokuapp.com/";
  const ENDPOINT = "/submit-contact";
  let response, data;

  if (message.fromEmail.length <= 0 || message.textBody.length <= 0) {
    return "Your email and message are both needed to submit this form."
  } 

  try {
    response = await fetch(HEROKU + ENDPOINT, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(message)
    })
  } catch (error) {
    console.log(error);
    console.log("RESPONSE ERROR");
  }
  
  try {
    data = response?.text() || "API ERROR";
  } catch (error) {
    console.log(error);
    console.log("DATA ERROR");
  }

  return data;
}


export const validateContactForm = (message) => {
  let errors = {};

  if (message.fromEmail.length < 1) {
    errors.fromEmail = "Your email is required for me to message you back"
  }
  if (message.fromBody.length < 1) {
    errors.fromBody = "Unable to send blank message"
  }

  return errors;
}