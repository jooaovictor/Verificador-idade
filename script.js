function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var imt = document.getElementById('imj')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique Seu Dados!')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano -Number(fano.value)
      var gnero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if(fsex[0].checked){
          genero = 'Homem'
          if(idade >=0 && idade < 10){
              //criança
              img.setAttribute('src','foto-bebe-m.png')
          }else if ( idade < 21){
              //jovem
              img.setAttribute('src','foto-jovem-m.png')
          }else if(idade < 50){
              //adulto
              img.setAttribute('src','foto-adulto-m.png')
          }else{
              //idoso
              img.setAttribute('src','foto-idoso-m.png')
          }
      }else if (fsex[1]){
          genero = 'Mulher'
          if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','foto-bebe-f.png')
        }else if ( idade < 20){
            //jovem
            img.setAttribute('src','foto-jovem-f.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','foto-adulto-f.png')
        }else{
            //idosa
            img.setAttribute('src','foto-idosa-f.png')
        }
      }
      res.style.fontSize = '1.4em'
      res.style.fontFamily = 'Arial, sans-serif'
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
      imt.appendChild(img)
      imt.style.textAlign = 'center'
    }
}