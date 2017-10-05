function request(option){
  // solicitar que indique que es lo que desea realizar, cifrar o decifrar
  do{
    var responce = prompt("Indique el número de lo que desea hacer: 1)cifrar - 2)decifrar");
    if(responce != ""){
   // si se responde cifrado, pasa a la función cipher
      if(responce == "1") {
        cipher();
     // si se responde decifrar, pasa la función decipher
      } else if (responce == "2") {
        decipher();
      // si se coloca una opción diferente, se alerta el mensaje
      } else {
        alert("Ingrese una opción válida");
      }
    }
    // si no se responde nada, se vuelve a preguntar
  } while (responce == "" || (responce != "1" && responce != "2"));
}

function cipher(a){
 // variable para preguntar cual es la palabra a cifrar
 var resCiper = prompt("Indique la palabra que desea cifrar")
 // variable para resultado
 var myCipher = String.fromCharCode(temp);
  // recorrer la palabra
  for( i=0; i<resCiper.length; i++ ) {
    // variable para separar letras  
     var separ = resCiper.split("")
     // variables para localizar letras separarlas
     var temp = separ[i].charCodeAt;
    // condicional si la letra esta en un lugar superior a 65 - 65 + 33)% + 65
      if( temp >= 65 )
     temp = ((temp[i] - 65 + 33)%26)+65;
     myCipher+=(temp)
     
     }
   alert(myCipher);
}

function decipher(){
  //varibale para preguntar cual es la palabra a decifrar
  var resDecipher = prompt("Indique la palabra que desea decifrar")
  var myDecipher = "";
  

  alert(myDecipher);
  
}

console.log(request())