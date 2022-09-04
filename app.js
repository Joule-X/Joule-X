// variabel
const btnKontak = document.querySelector("#about-btn-kontak");
const formEdit = document.querySelector("#form-edit");
// element input formnya
const nama = document.querySelector("#nama");
const role = document.querySelector("#role");
const availability = document.querySelector("#availability");
const age = document.querySelector("#age");
const lokasi = document.querySelector("#lokasi");
const experience = document.querySelector("#experience");
const email = document.querySelector("#email");
const btnSubmit = document.querySelector("#btn-submit");
// element data untuk output
const aboutNama = document.querySelector("#about-nama");
const aboutRole = document.querySelector("#about-role");
const aboutAvailability = document.querySelector("#about-availability");
const aboutAge = document.querySelector("#about-age");
const aboutLokasi = document.querySelector("#about-lokasi");
const aboutExperience = document.querySelector("#about-experience");
const aboutEmail = document.querySelector("#about-email");

// aksi
btnKontak.addEventListener("click", showHideForm);
formEdit.addEventListener('submit', function(e) {
    e.preventDefault();
    gantiData();
    hideFormEdit();
    gantiLabelBtnKontak();
})

// function
function showHideForm() {
    formEdit.classList.toggle("d-block")
}
function gantiData() {
    if(!confirm('Yakin Ubah Data??')) {
        return false;
    }
    alert('Data Berhasil Diubah!!');
    aboutNama.innerHTML = nama.value;
    aboutRole.innerHTML = role.value;
    aboutAvailability.innerHTML = availability.value;
    aboutAge.innerHTML = age.value;
    aboutLokasi.innerHTML = lokasi.value;
    aboutExperience.innerHTML = experience.value;
    aboutEmail.innerHTML = email.value;
}

function hideFormEdit() {
    formEdit.classList.remove('d-block');
}

function gantiLabelBtnKontak() {
    btnKontak.innerHTML = "Edit";
}