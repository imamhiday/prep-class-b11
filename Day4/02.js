
    let nilai = parseInt(prompt("Masukkan Nilai anda :"))
    // let b = parseInt(prompt("Masukkan Nilai 2 :"))
    
    if( nilai >= 90 && nilai <= 100){
        alert("Nilai anda A");
    }else if( nilai >= 80){
        alert("Nilai anda B");
    }else if( nilai >= 70){
        alert("Nilai anda C");
    }else if( nilai >= 60){
        alert("Nilai anda D");
    }else if(nilai < 60){
        alert("Nilai anda E");
    }else{
        alert("Mohon masukkan nilai dengan benar");
    }
