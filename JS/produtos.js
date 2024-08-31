let imgLivros = ["https://m.media-amazon.com/images/I/41B6dmnbL7S._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/510HCDDGb3L._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/51n4Al9ZoWL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/51diXEUMlNL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/41YjjH0alJL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/81JPLgU-EgS._SY425_.jpg",
"https://m.media-amazon.com/images/I/513a7spj71L._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/81WRqKMa-hL._SY425_.jpg",
"https://m.media-amazon.com/images/I/31xw1KeaIHL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/41gdYhSSMXL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/511+-lOOtsL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/41j+TtBuToL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/51eeW-5LsyL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/31v1FEUPkIS._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/31rpsNnOM0L._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/51SC6Gq4D1L._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/41htugkyltL._SY445_SX342_.jpg",
"https://m.media-amazon.com/images/I/41fNNDBNHgL._SY445_SX342_.jpg"]

let nomeLivros = ["Uma vida pequena", "Por lugares incríveis", "O meu pé de laranja lima", "Kimi no na wa", "Doze anos de escravidão", "O castelo animado", "Fortes e fracos", "Laranja mecânica", "Noites brancas", "É assim que se perde a guerra do tempo", "O Hobbit", "Orgulho e preconceito", "Manso e humilde", "Primeiro amor", "A obsolescência programada", "Mulherzinhas", "O retrato de Dorian Gray", "Livro do desassossego"]

const container = document.querySelector('.container');

for (let i = 0; i < imgLivros.length; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itens');
    
    const img = document.createElement('img');
    img.classList.add('poster');
    img.src = imgLivros[i];
    
    const h2 = document.createElement('h2');
    h2.classList.add('nomes');
    h2.textContent = nomeLivros[i];
    
    itemDiv.appendChild(img);
    itemDiv.appendChild(h2);
    
    container.appendChild(itemDiv);
}

window.addEventListener("scroll", function() {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 450)
  })
  
  function backTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }