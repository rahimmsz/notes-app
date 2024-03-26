class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<footer class="footer fixed-bottom bg-danger">
				<div class="container text-center">
					<span class="text-light">Notes App Created By Akmal Rahim</span>
				</div>
			</footer>`;
  }
}

customElements.define("app-footer", Footer);
