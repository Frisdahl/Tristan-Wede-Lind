var date = [
  "2023, December 6-8",
  "2023, December 12",
  "2024, January 15-17",
  "2024, January 22-23",
  "2024, February 5-6",
  "2024, February 15",
  "2024, March 10-12",
  "2024, March 18",
  "2024, April 5",
  "2024, 19-20",
  "2024, May 8-9",
  "2024, 15-16",
  "2024, June 6",
  "2024, June 20",
];

var topic = [
  "WebTech Summit",
  "Workshop 'Responsive Design Strategies for Modern Websites'",
  "Developer's Paradise Conference",
  "CodeCraft Workshop",
  "Design & Develop Summit",
  "Workshop 'Advanced JavaScript Techniques'",
  "WebMasters Expo",
  "Workshop 'Mastering CSS Grid Layouts'",
  "Workshop 'Optimizing Performance in Web Applications'",
  "Frontend Focus Conference",
  "Developer's Summit",
  "WebTech Summit",
  "Workshop 'Building Progressive Web Apps'",
  "Workshop 'Mastering React: Best Practices and Advanced Techniques'",
];

var role = [
  "Keynote Speaker",
  "",
  "Panelist",
  "Guest Instructor",
  "Featured Speaker",
  "",
  "Keynote Speaker",
  "",
  "",
  "Panel Moderator",
  "Featured Speaker",
  "Keynote Speaker",
  "",
  "",
];

var place = [
  "San Francisco, CA (Moscone Center)",
  "Copenhagen, Denmark (TBD)",
  "Miami, FL (Miami Convention Center)",
  "New York City, NY (TBD)",
  "Austin, TX (Austin Convention Center)",
  "Copenhagen, Denmark (TBD)",
  "Las Vegas, NV Las (Vegas Convention Center)",
  "Copenhagen, Denmark (TBD)",
  "Copenhagen, Denmark (TBD)",
  "Seattle, WA (Washington State Convention Center)",
  "Chicago, IL (McCormick Place)",
  "Boston, MA (Hynes Convention Center)",
  "Copenhagen, Denmark (Den Sorte Diamant)",
  "Aarhus, Denmark (TBD)",
];

const on_tour_section = document.getElementById("on-tour-section");

function createTour() {
  for (let i = 0; i < date.length; i++) {
    const article = document.createElement("article");
    article.className = "tour-article";

    const microphone_date_ctn = document.createElement("div");
    microphone_date_ctn.className = "microphone-date-ctn";

    const microphone_img = document.createElement("img");
    microphone_img.className = "microphone-img"; // Set class name
    microphone_img.src = "../img/microphone.png"; // Set the source of the image
    microphone_img.alt = "Microphone"; // Set an alt attribute for accessibility

    // Create paragraph elements for each line
    const dateParagraph = document.createElement("p");
    dateParagraph.textContent = date[i]; // Set text content
    dateParagraph.className = "date"; // Set class name

    const topicParagraph = document.createElement("p");
    topicParagraph.textContent = topic[i]; // Set text content
    topicParagraph.className = "topic"; // Set class name

    const roleParagraph = document.createElement("p");
    roleParagraph.textContent = role[i]; // Set text content
    roleParagraph.className = "role"; // Set class name

    const placeParagraph = document.createElement("p");
    placeParagraph.textContent = place[i]; // Set text content
    placeParagraph.className = "place"; // Set class name

    // Append paragraphs to the article
    article.appendChild(microphone_date_ctn);
    microphone_date_ctn.append(microphone_img);
    microphone_date_ctn.append(dateParagraph);
    article.append(topicParagraph, roleParagraph, placeParagraph);

    // Append the article to the section
    if (on_tour_section) {
      on_tour_section.appendChild(article); // Append the article to the section
    } else {
      console.error("Element with ID 'on-tour-section' not found.");
    }
  }
}

createTour();
