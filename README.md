# SpotifySongsRecommender

This is a full-stack AI-powered music recommendation tool that enhances your Spotify playlist by suggesting smart song recommendations based on the vibe of your playlist<br>
<br>

✅ Extracts song details from a Spotify playlist<br>
✅ Uses Gemini AI to suggest similar songs<br>
✅ Searches for matching songs via Spotify API<br>
✅ Displays recommendations with artwork and links<br>
✅ Smooth and responsive frontend with animated UX<br>
<br>

## 🧠 What It Does
- Accepts a Spotify playlist URL from the user
- Uses Spotify API to fetch playlist metadata and tracks
- Sends existing songs to Gemini AI to generate song recommendations
- Queries Spotify for those recommended songs and fetches their metadata
- Displays a beautiful UI showing:
  - Original playlist
  - AI-powered suggestions
  - Album artwork and clickable song links
<br>

## ⚙️ Tech Stack
- Frontend: `ReactJS`, `TailwindCSS`
- Backend: `Django`, `Spotify Web API`, `Gemini AI API`
<br>

## ✨ Website Design
![Example](https://raw.githubusercontent.com/SudevOP1/SpotifySongsRecommender/main/Implementation.png)
<br>

## 🚀 How to run it locally

### 1. Clone the repo
```bash
git clone https://github.com/SudevOP1/SpotifySongsRecommender.git
```

### 2. Create `.env` file
```bash
SPOTIFY_CLIENT_ID       = "xxx"
SPOTIFY_CLIENT_SECRET   = "xxx"
GEMINI_API_KEY          = "xxx"
```
Ensure folder structure:
```bash
SpotifySongsRecommender/
├─ apps/
│  ├─ frontend/
│  └─ backend/
├─ .gitignore
├─ .env         # add .env here
├─ README.md
└─ Implementation.png
```

### 3. Backend Server
```bash
cd SpotifySongsRecommender/apps/backend
pip install -r packages.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 4. Frontend Server
```bash
cd SpotifySongsRecommender/apps/frontend
npm install
npm run dev
```

### 5. See the magic happen
Go to `http://localhost:5173`<br>
<br>
