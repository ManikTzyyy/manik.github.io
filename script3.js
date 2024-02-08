document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.getElementById('carousel-inner');
  
    const carouselData = [
      {
        imgSrc: "images/cat.jpeg",
        title: "Cat",
        text: "this is my Cat"
      },
      {
        imgSrc: "images/family.jpeg",
        title: "Family",
        text: ""
      },
      {
        imgSrc: "images/friend.jpeg",
        title: "Friend",
        text: ""
      },
      {
        imgSrc: "images/friend2.jpeg",
        title: "Friend",
        text: ""
      },
      {
        imgSrc: "images/me.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/me2.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/me3.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/me4.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/me5.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/me6.jpeg",
        title: "Me",
        text: ""
      },
      {
        imgSrc: "images/mum.jpeg",
        title: "Mum & Me",
        text: ""
      },
      
    ];
  
    carouselData.forEach((item, index) => {
      const carouselItem = createCarouselItem(item, index === 0);
      carouselInner.appendChild(carouselItem);
    });
  
    function createCarouselItem(item, isActive) {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (isActive) {
        carouselItem.classList.add('active');
      }
  
      const card = document.createElement('div');
      card.classList.add('card', 'text-bg-dark');
  
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.classList.add('card-img');
      img.alt = '...';
  
      const cardOverlay = document.createElement('div');
      cardOverlay.classList.add('card-img-overlay');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = item.title;
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = item.text;
  
      cardOverlay.appendChild(cardTitle);
      cardOverlay.appendChild(cardText);
  
      card.appendChild(img);
      card.appendChild(cardOverlay);
  
      carouselItem.appendChild(card);
  
      return carouselItem;
    }
  });
  