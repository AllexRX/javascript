function carregar() {
	var msg = window.document.getElementById('msg') //cria  uma variavel chamada "msg" que vai receber o conteudo do id "msg" do documento html
	var img = window.document.getElementById('img') //cria  uma variavel chamada "img" que vai receber o conteudo do id "img" do documento html
	var data = new Date() // vai pegar a data do pc do user
	var hora = data.getHours()//uma varivel que vai pegar as horas em tempo real do seu computador de acordo com a variavel "data"
   var minuto = data.getMinutes() //uma varivel que vai pegar os minutos em tempo real do seu computador de acordo com a variavel "data"
	msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
   
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
