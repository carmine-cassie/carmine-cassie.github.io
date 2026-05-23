  let randoms = [];
  let value = 67.67;
  const phi = 1.618;
  const spread = 35;
  for (let i = 0; i < 100; i++) {
    value = (phi * value);
    randoms.push(Math.round((value % spread) - (spread/2)))
  }

  console.log(randoms)

  const SMALL = 250*250
  const MEDIUM = 300*300
  const LARGE = 350*350

  const shelves_div = document.getElementById("shelves");
  
  Object.keys(shelves).forEach((key) => {
    shelves_div.innerHTML += `<div id="${key}" class="shelf"></div>`

    let container = document.getElementById(key)

    container.innerHTML += `<h2>${key}</h2>`

    let books = shelves[key]

    for (let i = 0; i < books.length ; i++) {
      book = books[i]

      spine_text = '';

      if (book.series) {
        spine_text += book.series;
        if (book.entry) {
          spine_text += ' #' + book.entry
        }
        if (book.title) {
          spine_text += ': ' + book.title
        }
      } else {
        spine_text = book.title
      }

      // Spine widths are thus:
      // We say a book's word count is directly proportional its volume
      // We'll say that a 15k word book shall be 10 x 250 pixels
      // Volume is proportional to the square of the spine width to we can say this as:
      // height = (words * 40) / (width ^ 2)

      width_coefficient = SMALL;
      if (book.size == "medium") {
        width_coefficient = MEDIUM;
      }
      if (book.size == "large") {
        width_coefficient = LARGE;
      }

      height = Math.ceil(book.words * 40 / width_coefficient);

      container.innerHTML += `
      <div class="book ${book.size}" style="height: ${height}px;left:${randoms[i % randoms.length]}px">
        <span class="spine title">${spine_text}</span>
        <span class="spine">&nbsp;</span>
        <span class="spine">${book.author}</span>
      </div>
    `;

    }

    // Add bottom of Shelf
    container.innerHTML += `
      <div class="book large" style="height: 1px;background-color:black"></div>
    `;

  })