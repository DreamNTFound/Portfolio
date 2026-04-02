import { useState } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Button from "../components/Button";
import { sendEmail } from "../api/emailApi";
import Swal from "sweetalert2";

export default function Contact() {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const resetForm = () => {
    setFormData(initialFormState);
  };
  function submitForm(e) {
    e.preventDefault();
    sendEmail(formData)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully!",
          confirmButtonText: "OK",
          confirmButtonColor: "#3b82f6",
        });
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an error sending your message. Please try again later.",
          confirmButtonText: "OK",
          confirmButtonColor: "#ef4444",
        });
        resetForm();
      });
  }

  return (
    <>
      <FadeInOnScroll>
        <div id="contact" className="py-24 md:py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">
                  Contact
                </span>
              </div>
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-16">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div>
                  <p className="text-muted-foreground leading-relaxed font-inter mb-8">
                    I'm always open to new opportunities and collaborations.
                    Whether you have a project in mind or just want to say
                    hello, feel free to reach out.
                  </p>
                  <div className="space-y-4">
                    <a
                      href=""
                      className="flex items-center gap-4 p-4 rounded-xl border-border/50 bg-card/50 hover:border-primary/20  hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground font-mono">
                          Email
                        </p>
                        <p className="text-sm text-foreground font-inter">
                          jenardakatsuki@gmail.com
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-primary group:hover:text-primary/80 transition-colors"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-primary group:hover:text-primary/80 transition-colors"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">
                          Location
                        </p>
                        <p className="text-sm text-foreground font-inter">
                          Tacloban City, Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs text-muted-foreground font-mono mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="flex w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors md:text-sm bg-card/50 border-border/50 h-12 font-inter"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground font-mono mb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="flex w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors md:text-sm bg-card/50 border-border/50 h-12 font-inter"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground font-mono mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="flex w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors md:text-sm bg-card/50 border-border/50 h-32 font-inter"
                    />
                  </div>
                  <Button
                    type="submit"
                    onClick={submitForm}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors shadow px-4 py-2 w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-inter font-medium rounded-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send-icon lucide-send w-5 h-5"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
