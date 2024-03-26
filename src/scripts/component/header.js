class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<header>
				<nav class="navbar navbar-dark bg-danger">
					<h1 class="navbar-brand mb-0">Notes App</h1>
				</nav>
			</header>`;
  }
}

customElements.define("app-header", Header);
