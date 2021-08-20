import React, { useEffect } from "react";
import M from "materialize-css";

export default function Parallax(props) {
  useEffect(() => {
    var elems = document.querySelectorAll("textarea#textarea2");
    M.CharacterCounter.init(elems);
  });
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div id="contact-me-cont">
        <div className="row container">
          <form id="contact-form" className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate" />
                <label for="name">Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div id="text-and-submit" className="row valign-wrapper">
              <div className="input-field col s9">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                  data-length="200"
                ></textarea>
                <label for="textarea2">Message</label>
              </div>
              <button
                className="
                btn
                waves-effect waves-light
                col
                s2
                offset-s1
                hide-on-small-only
              "
                type="submit"
                name="action"
              >
                Send
                <i className="material-icons right">send</i>
              </button>
              <button
                className="
                btn
                waves-effect waves-light
                col
                s2
                offset-s1
                hide-on-med-and-up
              "
                type="submit"
                name="action"
              >
                <i className="material-icons">send</i>
              </button>
            </div>
          </form>
        </div>
        <div className="section-contents">
          <a id="cm-1" href="tel:+14043175336">
            404.317.5336
          </a>
          <a id="cm-2" href="mailto:rob@robperez.net">
            rob@robperez.net
          </a>
          <a
            id="cm-3"
            href="https://www.linkedin.com/in/r-perez/"
            target="blank"
          >
            LinkedIn
          </a>
          <a id="cm-4" href="https://github.com/perez-rob" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
