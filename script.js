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
    spanbaru.innerHTML = teksTugas;
    listbaru.appendChild(spanbaru);

    let tanggalbaru = document.createElement("span");
    tanggalbaru.innerHTML = tanggalTugas;
    listbaru.appendChild(tanggalbaru);
    
    
    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("hapus");
    btnHapus.addEventListener("click", function() {
    listbaru.remove();

});
    listbaru.appendChild(btnHapus);


    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.addEventListener("click", function() {
        let editTugas = prompt("Edit Tugas");

});
    listbaru.appendChild(btnEdit);


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