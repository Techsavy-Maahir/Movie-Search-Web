# 🎬 Movie Search Web App

A fast and responsive Movie Search web application built with **React + Vite** that fetches real-time movie data from the **OMDb API**.

Users can search for any movie and instantly view details like poster, release year, ratings, genre, and plot.

---

## 🚀 Features

- 🔍 Search movies by title
- 🎥 Display movie poster
- 📅 Show release year
- ⭐ IMDb ratings
- 📝 Movie plot & genre
- ⚡ Fast performance with Vite
- 📱 Fully responsive design
- 🚫 Handles empty inputs and invalid movie names gracefully

---

## 🧠 Tech Stack

- **React** (with JSX)
- **Vite** (blazing fast dev server)
- **OMDb API** (Open Movie Database)
- **CSS3** (custom styling)
- **npm**

---

## 🧩 How It Works

1. The user types a movie title in the search bar.
2. On clicking **Search** (or pressing **Enter**), a request is made to:

```
https://www.omdbapi.com/?s={title}&apikey={YOUR_API_KEY}
```

3. If the movie exists, its details (poster, year, ratings, plot) are fetched and rendered dynamically.
4. If not found, an error message is displayed.

---

## ⚙️ Setup & Usage

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Techsavy-Maahir/Movie-Search-Web.git
```

### 2️⃣ Navigate into the Project Folder

```bash
cd Movie-Search-Web/frontend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Add Environment Variables

Create a `.env` file in the `frontend` folder:

```
VITE_OMDB_API_KEY=your_api_key_here
```

> ⚠️ **Important:** Vite requires environment variables to start with `VITE_`

### 5️⃣ Use the API Key in Your Code

```js
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

fetch(`https://www.omdbapi.com/?t=Inception&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data));
```

### ▶️ Run the Development Server

```bash
npm run dev
```

App will run at: **http://localhost:5173/**

### 🏗 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## � Getting an OMDb API Key

1. Visit [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Choose the **FREE** plan
3. Enter your email
4. You will receive your API key via email

---

## � Example API Request

Search by movie title:

```
https://www.omdbapi.com/?t=Inception&apikey=YOUR_API_KEY
```

Search by keyword:

```
https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
```

---

## 💡 Error Handling

- Shows error if input is empty
- Displays "Movie not found" for invalid searches
- Handles network/fetch errors gracefully
- Clears previous results on each new search

---

## 📂 Project Structure

```
Movie-Search-Web/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
```

---

## 📸 Screenshots

![Screenshot 1](Screenshot%202026-02-22%20231144.png)
![Screenshot 2](Screenshot%202026-02-22%20231105.png)
![Screenshot 3](Screenshot%202026-02-22%20231038.png)

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch:

```bash
git checkout -b feature/feature-name
```

3. Commit changes:

```bash
git commit -m "feat: add new feature"
```

4. Push:

```bash
git push origin feature/feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Techsavy Maahir** � [GitHub Profile](https://github.com/Techsavy-Maahir)

---

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

✨ Built with React and the OMDb API to make exploring movies easier!