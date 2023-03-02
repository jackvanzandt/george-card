import { LitElement, html, css } from "lit";

import "@lrnwebcomponents/meme-maker/meme-maker.js";


export class GeorgeCard extends LitElement {
  static get properties() {
    return {
      accentColor: {
        type: String,
        reflect: true,
        attribute: "accent-color",
      },
      name: {
      type: String,
      reflect: true,
      attribute: "player-name",
      },
      position: {
        type: String,
        reflect: true,
      },
      imageUrl: {
        type: String,
        reflect: true,
        attribute: "image-url",
      },
      topText: {
        type: String,
        reflect: true,
        attribute: "top-text",
      },
      bottomText: {
        type: String,
        reflect: true,
        attribute: "bottom-text",
      },
      statone: {
        type: String,
        reflect: true,
        attribute: "stat-one",
      },
      stattwo: {
        type: String,
        reflect: true,
        attribute: "stat-two",
      }
    };
  }

  static get styles() {
    return css`
      :host([accent-color="yellow"]) .wrapper {
        background-color: yellow;
        color: black;
      }
      :host([accent-color="red"]) .wrapper {
        background-color: red;
        color: black;
      }
      :host([accent-color="green"]) .wrapper {
        background-color: green;
        color: black;
      }
      :host([accent-color="blue"]) .wrapper {
        background-color: blue;
        color: black;
      }

      .wrapper {
        width: 474px;
        border: 2px solid black;
        /* display: inline-flex; */
        background-color: yellow;
      }

      /* .image{
  width: 100%;
} */

      .header {
        text-align: center;
        font-weight: bold;
      }

      .header h3,
      .header h4 {
        margin: 10px;
        font-size: 20px;
      }

      .details summary {
        font-size: 20px;
        font-weight: bold;
      }

      details {
        margin-left: 24px;
        padding: 10px;
      }

      .buttons button:hover,
      a:hover,
      button:focus {
        opacity: 0.7;
      }

    `;
  }

  constructor() {
    super();
    this.version = "STARTING";
    this.accentColor = null;
    this.position = "";
    this.imageUrl = "";
    this.topText = "";
    this.bottomText = "";
  }

  render() {
    return html`
<div class="wrapper">
  <meme-maker image-url="${this.imageUrl}" 
  top-text="${this.topText}" 
  bottom-text="${this.bottomText}">

  </meme-maker>

  <div class="header">
    <h3>${this.name}</h3>
    <h4>${this.position}</h4>
  </div>
  <details class="details">
    <summary>Stats</summary>
    <li>${this.statone}</li>
    <li>${this.stattwo}</li>
  </details>
</div>
    
    `;
  }
}

customElements.define("george-card", GeorgeCard);
