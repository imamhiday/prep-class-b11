
    let age = parseInt(prompt("Masukkan umur anda :"))

            if( age >= 21){
                alert("rating film DEWASA");
            }else if( age >= 12){
                alert("rating film REMAJA");
            }else if( age >= 9){
                alert("rating film BIMBINGAN ORANG TUA");
            }else if(age < 9){
                alert("rating film SEMUA USIA");
            }else{
                alert("Mohon masukkan umur dengan benar");
            }
       
