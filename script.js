document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container-content');
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const card = createCard(item);
          container.appendChild(card);
        });
      })
      .catch(error => console.error('Error:', error));
  
    function createCard(item) {
      const card = document.createElement('div');
      card.classList.add('container-card');
  
      const pic = document.createElement('div');
      pic.classList.add('pic');
      const img = document.createElement('img');
      img.src = item.gambar;
      img.alt = '';
      pic.appendChild(img);
  
      const cardTxt = document.createElement('div');
      cardTxt.classList.add('card-txt');
      const title = document.createElement('div');
      title.classList.add('title');
      const h5 = document.createElement('h5');
      h5.textContent = item.judul;
      title.appendChild(h5);
      const desc = document.createElement('div');
      desc.classList.add('desc');
      desc.textContent = item.deskripsi;
      const button = document.createElement('div');
      button.classList.add('button');
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.style.setProperty('--clr', '#6962ad');
      const span = document.createElement('span');
      span.textContent = 'Selengkapnya';
      a.appendChild(span);
      button.appendChild(a);
  
      cardTxt.appendChild(title);
      cardTxt.appendChild(desc);
      cardTxt.appendChild(button);
  
      card.appendChild(pic);
      card.appendChild(cardTxt);
  
      return card;
    }
  });
  