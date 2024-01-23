function verificar(){

            var data = new Date();
            var ano = data.getFullYear();
            var fAno = document.getElementById('txtano');
            var res = document.getElementById('res');
          
            if(fAno.value.length == 0 || fAno.value > ano){
                window.alert('O campo Ano está invalido preecha corretamente');
            }else {
                var sexo = document.getElementsByTagName('radsex');
              
                var idade = ano - Number(fAno.value);
             
                var genero_masculino = document.getElementById('Masculino')
          
                var genero_feminino = document.getElementById('Feminino')
             
                var img = document.createElement('img')

                img.setAttribute('id', 'foto')
             
                if (genero_masculino.checked) {
                    var genero = 'Masculino'
                    if(idade >=0 && idade <10){

                        img.setAttribute('src', 'Bebe M.png')
                        document.body.style.background=`#FF665A`
                    }else if (idade < 21){

                        img.setAttribute('src', 'jovem M.png')
                        document.body.style.background=`#705E78`

                        
                    }else if(idade < 50){
                        img.setAttribute('src', 'Adulto M.png')
                        document.body.style.background=`#FFF587`

                    }else{
                        img.setAttribute('src', 'Velho M.png')
                        document.body.style.background=`#A3A1A8`

                     
                    }
          
          
                } else if (genero_feminino.checked) {
                    var genero = 'Feminino'
                    if(idade >=0 && idade <=10){
                        img.setAttribute('src', 'Bebe f.png')
                        document.body.style.background=`#FF8C64`

                    }else if (idade < 21){
                        img.setAttribute('src', 'Jovem F.png')
                        document.body.style.background=`#A5AAA3`

                    }else if(idade < 50){
                        img.setAttribute('src', 'Adulto F.png')
                        document.body.style.background=`#812F33`

                    }else{
                        img.setAttribute('src', 'velha .png')
                        document.body.style.background=`#FEA443`

                    }
                }
         
         
                res.style.textAlign='center'
                res.innerHTML = `<p> é uma pessoa de genero ${genero} com ${idade} anos de idade </p>`;
                res.appendChild(img)

            }

}