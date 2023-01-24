function convert(message,key){
    let newKey = key % 26
    let text=[]
    for(var i=0;i<message.length;i++){
        let code = message[i].charCodeAt()+newKey
        if(code <= 122){
            text[i]=String.fromCharCode(code);
        }else{
            text [i] = String.fromCharCode((96 + code % 122));
        }
       
    }
    console.log(text.join(""))
}


convert("hzz",25)