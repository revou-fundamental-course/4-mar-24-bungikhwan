function calculate() {
    let  weight = document.getElementById("weight");
console.log(weight.value);

if (!weight.isNan) {
    console.log ("number");
} else {
    console.log ("not number");
}

}
    var berat = parseFloat(document.getElementById("weight").value)/100;
    var tinggi = parseFloat(document.getElementById("height").value);
    var bmi = berat / (tinggi * tinggi) ;
    var keterangan = "";
    
    if (bmi >=30,0){
        keterangan = Kegemukan atau Obesitas
    } else if ((bmi >=25,0) & (bmi <=29,9)) {
        keterangan = Kelebihan berat badan
    }
}  else if ((bmi >=18,5) & (bmi <=24,9)) {
        keterangan = Berat badan normal atau ideal
} if (bmi <18,5){
        keterangan = kekurangan berat badan
} 
document.getElementById("bmi").innerHTML = weightInput;
document.getElementById("keterangan").innerHTML = keterangan;
