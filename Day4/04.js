
    
    let tahun = parseInt(prompt("Masukkan tahun : "));

         if(tahun % 4 == 0 && tahun % 100 != 0){
            alert("Tahun Kabisat");
         }else if(tahun % 400 == 0){
            alert("Tahun Kabisat");
        }else{
            alert("Bukan Tahun Kabisat");
    }

