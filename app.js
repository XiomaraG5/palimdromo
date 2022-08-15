
const text = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

console.log('----------------LISTA DE PALINDROMOS ------------------------------------------');
const findPalindromeMax3Length =(index1,index2)=>{
    let counter = 0;
    while(index1>= 0 && index2 < text.length){
        if(text[index1] != text[index2]){
            break;
        }
        if(text.substring(index1,index2 +1).length >= 3){
            console.log(text.substring(index1,index2 +1));
            counter ++
        }
        index1--;
        index2++
    }
    return counter;
}

const findPalindrome =()=>{
    
     let counter =0
     for(let index=0; index < text.length; index++){
        counter +=findPalindromeMax3Length(index - 1, index + 1)
        counter += findPalindromeMax3Length(index,index+1)
     } 
    return counter
}
findPalindrome()
console.log('Tola de plaindromos encontrados: ',findPalindrome());