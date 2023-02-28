function carregar() {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('img')
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `Agora são ${hora} horas.`
   
   if (hora >= 5 && hora < 12) {
      // BOM DIA
      img.src = '<img src="manha.png">'
      document.body.style.background = '#D6D989'
   } else if (hora >= 12 && hora < 18) {
      // BOA TARDE
      img.innerHTML = '<img src="tarde.png">'
      document.body.style.background = '#B43825'
      //#F08A7A
      document.getElementById('footer').style.color = '#EDD4D0';
      document.getElementById('header').style.color = '#EDD4D0';
   } else {
      // BOA NOITE
      img.innerHTML = '<img src="noite.png">'
      document.body.style.background = '#172026'
      document.getElementById('footer').style.color = 'aliceblue';
      document.getElementById('header').style.color = 'aliceblue';
   }
}
