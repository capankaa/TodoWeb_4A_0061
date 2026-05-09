const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() {

    let teksTugas = inputTugas.value;

    if(teksTugas === ""){
        alert("Masukkan Data Terlebih Dahulu!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");


    spanbaru.innerHTML = teksTugas;


    listbaru.appendChild(spanbaru);

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