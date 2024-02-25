const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', items.length);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryTitle} \nNumber of items: ${categoryItems}`);
});

const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
  item.style.fontFamily = '"Montserrat", sans-serif';
  item.style.fontWeight = '400'; 
  item.style.fontSize = '16px';  
  item.style.lineHeight = '1.5'; 
  item.style.letterSpacing = '0.04em'; 
  item.style.color = '#2e2f42'; 
});


