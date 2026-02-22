🎬 Movie Search Web App

A fast and responsive Movie Search web application built using React + Vite that fetches real-time movie data from the OMDb API.

Users can search for any movie and instantly view details like poster, release year, ratings, genre, and plot.

🚀 Features

🔍 Search movies by title

🎥 Display movie poster

📅 Show release year

⭐ IMDb ratings

📝 Movie plot & genre

⚡ Fast performance with Vite

📱 Fully responsive design

🛠 Tech Stack

⚛️ React

⚡ Vite

🌐 OMDb API

🎨 CSS 

📦 npm

🌐 About OMDb API

This project uses the OMDb API (Open Movie Database API).

The OMDb API is a RESTful web service that provides movie information including:

Title

Year

Genre

Director

Actors

Plot

IMDb Ratings

Poster images

It is widely used for educational and small-scale projects.

Official Website:
https://www.omdbapi.com/

🔑 Getting an OMDb API Key

Visit https://www.omdbapi.com/apikey.aspx

Choose the FREE plan

Enter your email

You will receive your API key via email

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Techsavy-Maahir/Movie-Search-Web.git
2️⃣ Navigate into the Project Folder
cd Movie-Search-Web
3️⃣ Install Dependencies
npm install
4️⃣ Add Environment Variables

Create a .env file in the root folder:

VITE_OMDB_API_KEY=your_api_key_here

⚠️ Important:
Vite requires environment variables to start with VITE_

5️⃣ Use the API Key in Your Code

Example:

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

fetch(`https://www.omdbapi.com/?t=Inception&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data));
▶️ Run the Development Server
npm run dev

App will run at:

http://localhost:5173/
🏗 Build for Production
npm run build

Preview production build:

npm run preview
📂 Project Structure
Movie-Search-Web/
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
🧪 Example API Request

Search by movie title:

https://www.omdbapi.com/?t=Inception&apikey=YOUR_API_KEY

Search by keyword:

https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
📸 Screenshots

![Screenshot 1](Screenshot%202026-02-22%20231144.png)
![Screenshot 2](Screenshot%202026-02-22%20231105.png)
![Screenshot 3](Screenshot%202026-02-22%20231038.png)


🤝 Contributing

Fork the repository

Create a branch

git checkout -b feature/feature-name

Commit changes

git commit -m "feat: add new feature"

Push

git push origin feature/feature-name

Open Pull Request

📜 License

This project is for educational purposes.