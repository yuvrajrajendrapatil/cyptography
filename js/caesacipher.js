
function encrypt(plaintext, shift) {
    var ciphertext = "";

    for (var i = 0; i < plaintext.length; i++) {
        var ch = plaintext.charAt(i);
        if (/[a-z]/i.test(ch)) {
            var shiftedCh = String.fromCharCode(ch.charCodeAt(0) + shift);
            if (/^[a-z]$/.test(ch) && shiftedCh > 'z') {
                shiftedCh = String.fromCharCode(shiftedCh.charCodeAt(0) - 26);
            } else if (/^[A-Z]$/.test(ch) && shiftedCh > 'Z') {
                shiftedCh = String.fromCharCode(shiftedCh.charCodeAt(0) - 26);
            }
            ciphertext += shiftedCh;
        } else {
            ciphertext += ch;
        }
    }

    return ciphertext;
}

function decrypt(ciphertext, shift) {
    var decryptedText = "";

    for (var i = 0; i < ciphertext.length; i++) {
        var ch = ciphertext.charAt(i);
        if (/[a-z]/i.test(ch)) {
            var shiftedCh = String.fromCharCode(ch.charCodeAt(0) - shift);
            if (/^[a-z]$/.test(ch) && shiftedCh < 'a') {
                shiftedCh = String.fromCharCode(shiftedCh.charCodeAt(0) + 26);
            } else if (/^[A-Z]$/.test(ch) && shiftedCh < 'A') {
                shiftedCh = String.fromCharCode(shiftedCh.charCodeAt(0) + 26);
            }
            decryptedText += shiftedCh;
        } else {
            decryptedText += ch;
        }
    }

    return decryptedText;
}

const encryptbtn = document.getElementById("encryptbtn");
const decryptbtn = document.getElementById("decryptbtn");

encryptbtn.onclick = ()=>{
    
    const inputvalue = document.getElementById("input-text").value;
    const shiftvalue = document.getElementById("input-shift").value;
    const encryptinput = document.getElementById("input-encrypt");

    const ciphertext = encrypt(inputvalue,Number(shiftvalue));

    encryptinput.value = ciphertext;
    console.log(ciphertext)
    console.log(inputvalue)
    console.log(typeof shiftvalue)
}

decryptbtn.onclick = ()=>{
    
    const shiftvalue = document.getElementById("input-shift").value;
    const encrypvalue = document.getElementById("input-encrypt").value;
    const decryptinput = document.getElementById("input-decrypt");

    const decryptedText = decrypt(encrypvalue,Number(shiftvalue));

    decryptinput.value = decryptedText;

}