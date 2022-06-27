let tablica = new Array()
function changeImie() {
    let imie = document.getElementById('inp1').value
    if (imie.length < 3) {
        document.getElementById('p1').style = 'visibility: visibles'
    } else {
        document.getElementById('p1').style = 'visibility: hidden'
    }
}
function getImie() {
    let imie = document.getElementById('inp1').value
    tablica.push("Imie:", imie)
}
function changeTelefon(val) {
    // let telefon = document.getElementById('inp3').value
    const arr = val.split('')
    const num = arr.filter(item => {
        if (item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            document.getElementById('p4').style = 'visiblity: hidden'
        } else {
            document.getElementById('p4').style = 'visiblity: visible'
        }
    })
}
function getTelefon(val) {
    let telefon = document.getElementById('inp4').value
    let xd = val.split('')
    const isTelefon = xd.some(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9')
    if (isTelefon == true) {
        alert('Numer telefonu musi mieć cyfry i tylko cyfry')
    }
    else {
        tablica.push("Telefon:", telefon)
    }
}
function changeEmail(val) {
    // const email = document.getElementById('inp4').value
    let xd = val.split('')
    const isEmail = xd.some(item => item === '@')
    if (isEmail == false) {
        document.getElementById('p3').style = 'visiblity: visible'
    } else {
        document.getElementById('p3').style = 'visiblity: hidden'
    }
}
function getEmail(val) {
    let email = document.getElementById('inp3').value
    let xd = val.split('')
    const isEmail = xd.some(item => item == '@')
    if (isEmail == true) {
        alert('Adres e-mail musi posiadać "@" w sobie.')
    } else {
        tablica.push("Email:", email)
    }
}
function changeAdres() {
    let adres = document.getElementById('inp2').value
    if (adres.length < 3) {
        document.getElementById('p2').style = 'visibility: visibles'
    } else {
        document.getElementById('p2').style = 'visibility: hidden'
    }
}
function getAdres() {
    let adres = document.getElementById('inp2').value
    tablica.push("Adres:", adres)
}
function zamow(value) {
    changeImie(), getImie(), changeEmail(value), getEmail(value), changeTelefon(value), getTelefon(value), changeAdres(), getAdres()
    console.log(tablica)
    tablica = []
}

// function changeAdres(val) {
//     let adres = document.getElementById('inp2').value
//     const arr = val.split('')
//     const num = arr.filter(item => {
//         if (item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
//             document.getElementById('p2').style = 'visiblity: hidden'
//         } else if (adres.length < 3) {
//             document.getElementById('p2').style = 'visiblity: hidden'
//         } else {
//             document.getElementById('p2').style = 'visiblity: visible'
//         }
//     })
// }

// function getAdres(val) {
//     let adres = document.getElementById('inp2').value
//     let xd = val.split('')
//     const isAdres = xd.some(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9')
//     if (isAdres == true) {
//         alert('Numer telefonu musi mieć cyfry i tylko cyfry')
//     } else if (adres.length < 3) {
//         alert('Numer telefonu musi mieć cyfry i tylko cyfry')
//     } else {
//         tablica.push("Adres:", adres)
//     }
// }