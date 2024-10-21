const book_title = [
  "Advanced PHP",
  "CSS for Developers",
  "Advanced JavaScript",
  "Basic Programming",
  "Basic JavaScript",
  "Front-End Web Development",
];

const book_image = [
  "../img/book_php.png",
  "../img/book_css.png",
  "../img/book_js.png",
  "../img/book_programming.png",
  "../img/book_js_basic.png",
  "../img/book_front_end.png",
];

const heading = [
  "From Zero to Hero",
  "A Visual Journey ",
  "Frameworkless",
  "Algorithms and Beyond",
  "Tweaking the Web",
  "A Nice Introduction",
];

const year = ["(2023)", "(2022)", "(2021)", "(2017)", "(2017)", "(2016)"];

const description = [
  "'Advanced PHP: From Zero to Hero' is a groundbreaking book that unlocks the full potential of PHP programming. With meticulous detail, Lind guides readers through advanced concepts, empowering them to master complex topics such as object-oriented programming, database integration, and secure web application development. This comprehensive guide is a must-have for aspiring PHP developers seeking to elevate their skills to heroic heights.",
  "This work offers an immersive exploration of CSS that transcends mere syntax. Through vivid illustrations and practical examples, Lind demystifies the intricacies of CSS, equipping developers with the tools to craft stunning, responsive designs. This visual masterpiece is an indispensable companion for developers seeking to elevate their CSS skills and create visually captivating websites.",
  "In 'Advanced JavaScript: Frameworkless,' Tristan Wede Lind revolutionizes the approach to JavaScript development. Breaking free from the confines of frameworks, Lind delves into the core principles and advanced techniques that empower developers to create robust, scalable, and framework-independent JavaScript applications. This essential guide unveils the true potential of JavaScript, transforming developers into true masters of the language.",
  "A definitive guide that demystifies the fundamentals of programming. With clarity and precision, Lind introduces readers to essential concepts such as variables, loops, and conditionals, while also delving into the world of algorithms. This comprehensive resource equips aspiring programmers with the foundational knowledge needed to embark on a successful coding journey.",
  "'Basic JavaScript' is a transformative book that demystifies the building blocks of JavaScript. With practical examples and step-by-step instructions, Lind empowers readers to enhance websites with interactive elements and dynamic functionalities. This essential guide unlocks the power of JavaScript, enabling readers to tweak the web and create engaging user experiences.",
  "Tristan Wede Lind crafts a captivating journey into the world of front-end development. Lind artfully introduces readers to HTML, CSS, and JavaScript, unraveling the secrets of creating visually stunning and interactive websites. With its approachable style and comprehensive coverage, this book is the perfect starting point for aspiring front-end developers.",
];

const book_section = document.getElementById("books");
function showBooks() {
  if (!book_section) {
    console.error("Element with ID 'books' not found.");
    return;
  }

  book_title.forEach((title, i) => {
    const article = document.createElement("article");
    article.className = "book-article";

    article.innerHTML = `
      <div class="book-img">
        <img src="${book_image[i]}" alt="Book cover of ${title}">
      </div>
      <div class="book-text">
        <h2 class="book-title">${title}</h2>
        <div class="heading-year-ctn">
          <h3 class="heading-title">${heading[i]}</h3>
          <p>${year[i]}</p>
        </div>
        <p class="book-description">${description[i]}</p>
      </div>
    `;

    book_section.append(article);
  });
}

showBooks();
