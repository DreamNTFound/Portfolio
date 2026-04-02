import emailjs from "emailjs-com";
emailjs.init("rAu-eBs1o4F7dtWVw");

export const sendEmail = (templateParams) => {
  return emailjs.send(
    "service_DreamNTFound",
    "template_DreamNTFound",
    templateParams,
  );
};
