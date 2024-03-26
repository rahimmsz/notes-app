class FormComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `   
		<div class="card">
			<div class="card-body">
				<div class="form-group">
					<label for="inputTitle">Enter Title</label>
					<input id="inputTitle" type="text" class="form-control" placeholder="Enter Title" required>
				</div>
				<div class="form-group">
					<label for="inputBody">Enter Body</label>
					<teXtarea id="inputBody" class="form-control" placeholder="Enter Body" required></teXtarea>
				</div>
				<div class="form-group">
					<button id="buttonSave" class="btn btn-success">Simpan</button>
				</div>
			</div>
		</div>
	`;
  }
}

customElements.define("note-form", FormComponent);
