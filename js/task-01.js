(function () {
  const categories = document.querySelector('#categories');

  console.log(`Number of categories: ${categories.children.length}`);

  for (let i = 0; i < categories.children.length; i++) {
    console.log(`Category: ${
      categories.children[i].querySelector('h2').innerHTML
    }
    Elements: ${categories.children[i].querySelectorAll('li').length}`);
  }
})();
