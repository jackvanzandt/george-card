import { LitElement, html, css } from 'lit';

const george = new URL('../assets/george.jpg', import.meta.url).href;

export class GeorgeCard extends LitElement {
  static properties = {
    version: {},
  };

static get styles(){
  return css`
.wrapper {
  width: 474px;
  border: 2px solid black;
  display: insline-flex;
  background-color: yellow;
  
}

.image{
  width: 474px;
}

.header{
  text-align: center;
  font-weight: bold;
  
}

.header h3,
.header h4{
  margin: 10px;
}

.details summary{
  font-size: 20px;
  font-weight: bold;
}

details{
  margin-left: 24px;
  padding: 10px;
}

button{
  display: inline-block;
  padding: 10px;
  background-color: red;
}

.buttons button:hover, a:hover, button:focus {
  opacity: 0.7;
}

@media only screen and (max-width: 325px){
  .wrapper{
    font-size: 10px;
    font-weight: normal;
  }
  details {
    display: none;
  }
  .wrapper header h3, h4 {
    font-size: 12px;
  }
}

  `;
}

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
<div class="wrapper">
  <div class="container">
  <img class="image" src="https://tse1.mm.bing.net/th?id=OIP.zPK_w1eJ4HJOCkaFzQrS4wHaED&pid=Api&P=0"/>
  <div class="header">
    <h3>George Pickens</h3>
    <h4> Wide Receiver </h4>
  </div>
  <details class="details">
    <summary>Rookie Stats</summary>
    <div>
      <ul>
      <li>Rookie for the Pittsburgh Steelers in 2022 </li>
        <li> 84 targets 801 yards 9.5 yards per target 4 TD </li>
      </ul>
    </div>
  </details>
</div>
</div>
    
    `;
  }
}

customElements.define('george-card', GeorgeCard);