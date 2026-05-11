const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() {

    let teksTugas = inputTugas.value;
    let tanggalTugas = inputTanggal.value;

    if(teksTugas === ""){
        alert("Masukkan Data Terlebih Dahulu!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    let tanggalbaru = document.createElement("span");
    let btnHapus = document.createElement("button");
    let btnEdit = document.createElement("button");

    spanbaru.innerHTML = teksTugas;
    tanggalbaru.innerHTML = tanggalTugas;
    
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("hapus");

    btnEdit.innerHTML = "Edit";

btnHapus.addEventListener("click", function() {
    listbaru.remove();

});


    listbaru.appendChild(spanbaru);
    listbaru.appendChild(tanggalbaru);
    listbaru.appendChild(btnHapus);

    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0){
            item.style.color = "blue";
        } else {
            item.style.color = "red";
        }

    });

    inputTugas.value = "";

});