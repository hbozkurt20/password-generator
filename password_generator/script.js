let spanResult = document.getElementById("result");
const generateButton = document.getElementById("generate");
const clipBoardButton = document.querySelector("#clipboard");
const copy = document.querySelector("#copy");


generateButton.addEventListener("click", () =>{
 spanResult.innerText = generatePassword()
})

copy.addEventListener("click", async () => {
    const password = spanResult.innerText.trim(); // Gereksiz boşlukları kaldır

    if (!password) return; // Şifre boşsa işlemi durdur

    try {
        await navigator.clipboard.writeText(password); // Modern kopyalama yöntemi
        console.log("Parola kopyalandı");
    } catch (error) {
        console.error("Parola kopyalanırken hata oluştu:", error);
    }
});




const getRandomLowerLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpperrLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    const symbols = "@!$+%&*"

    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunction = {getRandomLowerLetter,getRandomUpperrLetter,getRandomNumber,getRandomSymbol}

const generatePassword = () => {
    const length = 16
    let generatedPassword = ""

    for(let i = 0;i < length;i++){
        generatedPassword += Object.values(randomFunction)[Math.floor(Math.random() * 4)]()
    }

    return generatedPassword
}






//? Notlarım = my_notes

//! object.value çalıştırdığında array gibi saklanan funcitonları çağırır sonuna parantez ekleyip çalıştırırsın



//! console.log(String.fromCharCode(Math.floor(Math.random() * 26)+65)); //!seçim büyük harfler üzerinden olacak

// Math.random() → 0 ile 1 arasında rastgele bir ondalıklı sayı üretir.

// Örneğin: 0.5678, 0.1234, 0.9876 vb.
// Math.random() * 26 → 0 ile 26 arasında rastgele bir sayı üretir (ondalıklı).

// Örneğin: 0.5678 * 26 = 14.7628
// Math.floor(...) → Ondalıklı kısmı atar ve sadece tam sayı kısmını alır.

// Örneğin: Math.floor(14.7628) = 14
// + 97 → 97 ekleyerek ASCII kodu olarak a-z aralığına getirir.

// 97 ASCII tablosunda "a" harfinin karşılığıdır.
// 122 ASCII tablosunda "z" harfinin karşılığıdır.
// Üretilen sayılar: 97 (a) - 122 (z) arasında olur.