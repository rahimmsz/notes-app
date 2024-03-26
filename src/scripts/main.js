function main() {
  const baseUrl = "https://notes-api.dicoding.dev/v2";

  const getNotes = async () => {
    try {
      const response = await fetch(`${baseUrl}/notes`);
      const responseData = await response.json();

      renderAllNotes(responseData.data);
    } catch (error) {
      showResponseMessage(error.message);
    }
  };

  const insertNote = (note) => {
    if (!note.title || !note.body) {
      showResponseMessage("Title and body can't empty !!");
    }

    fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create note");
        }
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const removeNotes = (notesId) => {
    fetch(`${baseUrl}/notes/${notesId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const archivedNotes = (notesId) => {
    fetch(`${baseUrl}/notes/${notesId}/archive`, {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const renderAllNotes = (notes) => {
    const listNotesElement = document.querySelector("#listNotes");
    listNotesElement.innerHTML = "";

    if (Array.isArray(notes)) {
      notes.forEach((note) => {
        listNotesElement.innerHTML += `
          <div class="col-lg-4 col-md-6 col-sm-12 d-inline" style="margin-top: 12px;">
            <div class="card">
              <div class="card-body">
                <h5>${note.title}</h5>
                <p>${note.body}</p>
                <button type="button" class="btn btn-danger btn-sm button-delete" id="${note.id}" ">Hapus</button>
                <button type="button" class="btn btn-warning btn-sm button-archive" id="${note.id}" ">Arsipkan</button>
              </div>
            </div>
          </div>
        `;
      });

      const buttonSave = document.querySelectorAll(".button-delete");
      buttonSave.forEach((button) => {
        button.addEventListener("click", (event) => {
          const notesId = event.target.id;
          removeNotes(notesId);
        });
      });

      const buttonArchive = document.querySelectorAll(".button-archive");
      buttonArchive.forEach((button) => {
        button.addEventListener("click", (event) => {
          const notesId = event.target.id;
          archivedNotes(notesId);
        });
      });
    } else {
      alert("Notes is not an array.");
    }
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputTitle = document.querySelector("#inputTitle");
    const inputBody = document.querySelector("#inputBody");
    const buttonSave = document.querySelector("#buttonSave");

    buttonSave.addEventListener("click", function () {
      const note = {
        title: inputTitle.value,
        body: inputBody.value,
      };
      insertNote(note);
    });
    getNotes();
  });
}

export default main;
