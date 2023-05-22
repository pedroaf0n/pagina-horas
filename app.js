function carregar (){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        img.src = 'public/images/foto-manha.jpg'
    } else if (hora>= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'public/images/foto-tarde.jpg'
    } else {
        // BOA NOITE
        img.src = 'public/images/foto-noite.jpg'
    }
}