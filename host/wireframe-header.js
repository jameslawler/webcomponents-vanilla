const getStyle = () => (`
  .wireframeHeader-container {
    background-color: #005ea8;
    display: flex;
    height: 74px;
    padding: 0 20px;
  }

  .wireframeHeader-logo {
    color: #FFF;
    flex-grow: 1;
    font-size: 40px;
    line-height: 74px;
  }

  .wireframeHeader-telephone {
    color: #FFF;
    font-size: 25px;
    line-height: 74px;
  }
`);

class WireframeHeader extends HTMLElement {
  connectedCallback () {
    this.createShadowRoot();
    this.company = this.getAttribute('company');
    this.phoneNumber = this.getAttribute('phone');
    this.render();
  }

  addStyle () {
    const styleTag = document.createElement('style');
    styleTag.textContent = getStyle();
    this.shadowRoot.appendChild(styleTag);
  }

  render () {
    this.shadowRoot.innerHTML = `
      <div class="wireframeHeader-container">
        <div class="wireframeHeader-logo">${this.company}</div>
        <div class="wireframeHeader-telephone">${this.phoneNumber}</div>
      </div>
    `;
    this.addStyle()
  }
}

try {
  customElements.define('wireframe-header', WireframeHeader)
} catch (err) {
  const h3 = document.createElement('h3')
  h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
  document.body.appendChild(h3)
}
