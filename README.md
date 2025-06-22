# Movie Web App

The Movie Web App is a modern, responsive web application built using React.js that allows users to explore and discover a wide range of movies and TV shows. It is designed with a focus on performance, responsiveness, and an engaging user experience.

## 🚀 Features

🎞️ Sliding image gallery for showcasing trending and top-rated movies (built with React Image Gallery or Swiper.js)

🔍 Search functionality to filter and find movies in real-time using API integration

🎬 Interactive movie cards that reveal detailed information upon click

📱 Responsive design optimized for desktops, tablets, and mobile devices

🧩 Component-based architecture for maintainability and scalability

🔁 Client-side routing using React Router DOM

🌐 API data fetched from The Movie Database (TMDb)

🛠️ Technologies Used
React.js – Frontend library

Tailwind CSS – Utility-first CSS framework for responsive design

JavaScript (ES6+) – Programming language

React Router DOM – Client-side routing

Fetch API / Axios – For making asynchronous API requests

TMDb API – Source for movie and TV show data

react-image-gallery – For sliding gallery UI

📂 Functionality Overview
🔹 Sliding Image Gallery
The homepage features a dynamic sliding gallery that presents trending or popular titles. It is implemented using modern carousel libraries like Swiper.js, offering smooth transitions and mobile-friendly swipes.

🔹 Search Functionality
Users can search for any movie or TV show. The app fetches real-time data using fetch() or Axios with debounce optimizations. Results are displayed as interactive cards.

🔹 Detailed Movie Page
Clicking on a movie card routes the user to a dedicated page that shows:

Title, release date, genre, and overview

Cast and crew information

Poster image and backdrop

User ratings and popularity index

🔹 Responsiveness
Built with Tailwind CSS, the layout adapts fluidly to different screen sizes using:

flex, grid, and media queries

Tailwind's responsive breakpoints (sm, md, lg, xl)
