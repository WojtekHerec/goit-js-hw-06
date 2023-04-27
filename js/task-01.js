// Znajdujemy listę kategorii na podstawie id
const categoriesList = document.querySelector("#categories");

// Znajdujemy wszystkie elementy li.item w liście kategorii
const categoryItems = categoriesList.querySelectorAll("li.item");

// Wypisujemy w konsoli liczbę kategorii
console.log(`Number of categories: ${categoryItems.length}`);

// Dla każdego elementu li.item znajdujemy i wypisujemy w konsoli tekst nagłówka oraz liczbę elementów w danej kategorii
categoryItems.forEach((categoryItem) => {
  // Znajdujemy tekst nagłówka wewnątrz elementu li.item
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Znajdujemy wszystkie elementy li w obrębie elementu li.item
  const categoryElements = categoryItem.querySelectorAll("li");

  // Wypisujemy w konsoli nazwę kategorii oraz liczbę elementów
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
