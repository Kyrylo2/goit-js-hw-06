const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

(function (images) {
  const imagesList = document.querySelector('.gallery');
  imagesList.style.display = 'flex';
  imagesList.style.flexDirection = 'column';
  imagesList.style.gap = '10px';
  imagesList.style.alignItems = 'center';

  const imagesHTML = images
    .map(
      (image) =>
        `<img src="${image.url}" alt="${image.alt}" width="370" class="image-item">`
    )
    .join('');

  imagesList.insertAdjacentHTML('beforeend', imagesHTML);
})(images);
