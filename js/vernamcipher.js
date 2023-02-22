function vernamEncrypt(plaintext, key) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        ciphertext += String.fromCharCode(charCode);
    }
    return ciphertext;
}

function vernamDecrypt(ciphertext, key) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        plaintext += String.fromCharCode(charCode);
    }
    return plaintext;
}



const encryptbtn = document.getElementById("encryptbtn");
const decryptbtn = document.getElementById("decryptbtn");

encryptbtn.onclick = ()=>{
    
    const inputvalue = document.getElementById("input-text").value;
    const randaomtext = document.getElementById("input-shift").value;
    const encryptinput = document.getElementById("input-encrypt");

    const ciphertext = vernamEncrypt(inputvalue,randaomtext);
    console.log(randaomtext)

    encryptinput.value = ciphertext;
    console.log(ciphertext)
    console.log(inputvalue)
}

decryptbtn.onclick = ()=>{
    
    const shiftvalue = document.getElementById("input-shift").value;
    const encrypvalue = document.getElementById("input-encrypt").value;
    const decryptinput = document.getElementById("input-decrypt");

    const decryptedText = vernamDecrypt(encrypvalue,shiftvalue);

    decryptinput.value = decryptedText;

}

let plaintext = "dhanraj";
let key = "secretkey";

let ciphertext = vernamEncrypt(plaintext, key);
console.log(ciphertext); // outputs "SRRUNGRNMUPVXHQ"

let decryptedText = vernamDecrypt(ciphertext, key);
console.log(decryptedText); // outputs