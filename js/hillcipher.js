function mod(n, m) {
    return ((n % m) + m) % m;
}

function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function inverseMatrix(matrix, m) {
    let det = mod(matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0], m);
    let detInv = 0;
    for (let i = 0; i < m; i++) {
        if (mod(det * i, m) == 1) {
            detInv = i;
            break;
        }
    }
    if (detInv == 0) {
        return null;
    }
    let invMatrix = [];
    invMatrix[0] = [mod(matrix[1][1] * detInv, m), mod(-matrix[0][1] * detInv, m)];
    invMatrix[1] = [mod(-matrix[1][0] * detInv, m), mod(matrix[0][0] * detInv, m)];
    return invMatrix;
}

function encrypt(plaintext, key) {
    let m = key.length;
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i += m) {
        let block = [];
        for (let j = 0; j < m; j++) {
            let charCode = plaintext.charCodeAt(i + j) - 97;
            block.push(charCode);
        }
        let encryptedBlock = [];
        for (let j = 0; j < m; j++) {
            let sum = 0;
            for (let k = 0; k < m; k++) {
                sum += key[j][k] * block[k];
            }
            encryptedBlock.push(mod(sum, 26));
        }
        for (let j = 0; j < m; j++) {
            ciphertext += String.fromCharCode(encryptedBlock[j] + 97);
        }
    }
    return ciphertext;
}

function decrypt(ciphertext, key) {
    let m = key.length;
    let invKey = inverseMatrix(key, 26);
    if (invKey == null) {
        return null;
    }
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += m) {
        let block = [];
        for (let j = 0; j < m; j++) {
            let charCode = ciphertext.charCodeAt(i + j) - 97;
            block.push(charCode);
        }
        let decryptedBlock = [];
        for (let j = 0; j < m; j++) {
            let sum = 0;
            for (let k = 0; k < m; k++) {
                sum += invKey[j][k] * block[k];
            }
            decryptedBlock.push(mod(sum, 26));
        }
        for (let j = 0; j < m; j++) {
            plaintext += String.fromCharCode(decryptedBlock[j] + 97);
        }
    }
    console.log(plaintext)
    return plaintext;
}



const encryptbtn = document.getElementById("encryptbtn");
const decryptbtn = document.getElementById("decryptbtn");

encryptbtn.onclick = ()=>{
    
    const inputvalue = document.getElementById("input-text").value;

    const martixinput1 = document.getElementById("matrix-value1").value;
    const martixinput2 = document.getElementById("matrix-value2").value;
    const martixinput3 = document.getElementById("matrix-value3").value;
    const martixinput4 = document.getElementById("matrix-value4").value;

    const encryptinput = document.getElementById("input-encrypt");


    const key = [[Number(martixinput1), Number(martixinput2)], [Number(martixinput3), Number(martixinput4)]];

    const ciphertext = encrypt(inputvalue,key);

    encryptinput.value = ciphertext;
    console.log(key)
    console.log(inputvalue)
}

decryptbtn.onclick = ()=>{

    const martixinput1 = document.getElementById("matrix-value1").value;
    const martixinput2 = document.getElementById("matrix-value2").value;
    const martixinput3 = document.getElementById("matrix-value3").value;
    const martixinput4 = document.getElementById("matrix-value4").value;

    const encryptvalue = document.getElementById("input-encrypt").value;

    const decryptinput = document.getElementById("input-decrypt");

    const key = [[Number(martixinput1), Number(martixinput2)], [Number(martixinput3), Number(martixinput4)]];


    const decryptedText = decrypt(encryptvalue,key);
    decryptinput.value = decryptedText;

}