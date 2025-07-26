import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

function App({ myBestData }) {
  let backendUrl = "http://127.0.0.1:8000";
  let animationTimeSec = 2;
  let loadingMsgs = [
    "Finding bangers, please hold on",
    "Cooking up your music stew",
    "Good songs take good time",
    "Summoning your next earworm",
    "Almost there. Don't skip",
    "Bribing DJ with cookies",
    "Shuffling vibes. Please wait",
    "Loading jams, not traffic",
    "Searching beats in space",
    "Tuning the song antenna",
    "Assembling hits from scratch",
    "Running on vibes and hope",
    "Fetching fire from the cloud",
    "Scanning the jukebox dimension",
    "Beats are still booting up",
  ];

  let [playlistUrl, setPlaylistUrl] = useState("");
  // let [playlistData, setPlaylistData] = useState(myBestData); // for testing
  let [playlistData, setPlaylistData] = useState(null);
  let [numRecs, setNumRecs] = useState(5);
  let [suggestedSongs, setSuggestedSongs] = useState([]);
  let [loadingSongs, setLoadingSongs] = useState(false);
  let [loadingRecs, setLoadingRecs] = useState(false);
  let [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  let fetchPlaylist = async () => {
    setLoadingSongs(true);
    try {
      let playlist_id = playlistUrl;
      for (let str of ["https://", "www.", "open.spotify.com/playlist/"]) {
        if (playlist_id.includes(str)) {
          playlist_id = playlist_id.replace(str, "");
        }
      }
      console.log(playlist_id);
      let res = await fetch(`${backendUrl}/base/get_playlist/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playlist_id: playlist_id }),
      });
      let data = await res.json();
      if (data.success) {
        setPlaylistData(data.playlist);
      } else {
        alert("Something went wrong.");
        console.log(data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Error fetching playlist.");
    }
    setLoadingSongs(false);
  };

  let fetchRecommendations = async () => {
    // setSuggestedSongs(myBestData.songs.slice(0, numRecs));
    setLoadingRecs(true);
    setCurrentMsgIndex(0);
    try {
      let res = await fetch(`${backendUrl}/base/get_recommended_songs/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songs: playlistData.songs, num: numRecs }),
      });
      let data = await res.json();
      if (data.success) {
        setSuggestedSongs(data.recommended_songs);
      } else {
        alert("Could not fetch recommendations.");
        console.log(data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Error fetching recommendations.");
    }
    setLoadingRecs(false);
  };

  let showSongs = (songs) => {
    return (
      <div className="flex flex-col">
        {songs.map((song, i) => (
          <div
            key={i}
            onClick={() => {
              if (song.found !== false) {
                window.open(song.song_url);
              }
            }}
            className="flex flex-row gap-2 hover:bg-blue-300/10 rounded-xl
              py-1 group cursor-pointer transition duration-150"
          >
            <div className="relative w-7 flex justify-end items-center">
              <p
                className={`text-md text-gray-400 absolute opacity-100
                  transition duration-100 ${
                    song.found !== false && "group-hover:opacity-0"
                  }`}
              >
                {i + 1}
              </p>
              {song.found !== false && (
                <ExternalLink
                  className="text-gray-400 w-4 h-4 absolute opacity-0
                group-hover:opacity-100 transition duration-100"
                />
              )}
            </div>

            {song.found !== false ? (
              <img
                src={song.cover}
                alt={song.name}
                className="w-10 rounded-lg"
              />
            ) : (
              <div
                className="w-10 h-10 bg-gray-700 flex items-center
                  justify-center text-white font-semibold"
              >
                ?
              </div>
            )}
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-semibold truncate">{song.name}</p>
              <p className="text-xs text-gray-400 truncate">
                {song.artists.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (!loadingRecs) return;

    const interval = setInterval(() => {
      setCurrentMsgIndex((prevIndex) => {
        let newIndex = prevIndex;
        while (newIndex === prevIndex && loadingMsgs.length > 1) {
          newIndex = Math.floor(Math.random() * loadingMsgs.length);
        }
        return newIndex;
      });
    }, animationTimeSec * 1000);

    return () => clearInterval(interval);
  }, [loadingRecs]);

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-[10%] px-4
      bg-gradient-to-b from-gray-900 to-black bg-fixed bg-no-repeat bg-cover text-gray-100
      transition-colors duration-300"
    >
      {/* intro div */}
      <div className="mt-15">
        <h1
          className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r
          bg-clip-text text-transparent pb-2 from-green-500 to-blue-500"
        >
          AI-Powered Song Recommender 🎵
        </h1>
        <p className="text-center text-lg mb-4">
          Paste a Spotify playlist link and get smart recommendations.
        </p>
      </div>

      {/* playlist input */}
      {!playlistData && (
        <div className="flex w-full max-w-[60%] gap-4 mt-10 relative">
          <input
            type="text"
            value={playlistUrl}
            onChange={(e) => setPlaylistUrl(e.target.value)}
            placeholder="https://open.spotify.com/playlist/..."
            className="flex-grow px-4 py-4 rounded-full border border-gray-700 bg-gray-800 text-white
            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
          />
          <button
            className="py-2 px-5 rounded-full bg-blue-600 hover:bg-blue-800 active:bg-blue-900 text-white
              text-lg font-semibold cursor-pointer transition absolute top-1/2 -translate-y-1/2 right-2
              disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-progress"
            onClick={fetchPlaylist}
          >
            Fetch Songs
          </button>
        </div>
      )}

      {/* loader for fetching songs */}
      {loadingSongs && <Loader className="mt-10" />}

      {playlistData && (
        <div className="w-full mt-8 flex flex-row gap-8">
          {/* left - playlist details */}
          <div className="w-[50%]">
            <h2 className="text-2xl font-semibold mb-4">
              🎧 {playlistData.name}
            </h2>
            {showSongs(playlistData.songs)}
          </div>

          {/* right - recommendations section */}
          <div className="w-[50%] flex flex-col gap-6">
            {/* recommendation input */}
            {suggestedSongs.length === 0 && (
              <div className="flex flex-col">
                <label className="text-lg mb-3" htmlFor="numRecs">
                  How many songs to recommend
                </label>
                <div className="flex flex-row gap-4">
                  <input
                    id="numRecs"
                    type="number"
                    min={1}
                    max={20}
                    value={numRecs}
                    disabled={loadingRecs}
                    onChange={(e) => setNumRecs(parseInt(e.target.value))}
                    className="w-30 px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white
                      text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 active:bg-blue-900
                      text-white font-semibold transition cursor-pointer
                      disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-progress"
                    onClick={fetchRecommendations}
                    disabled={loadingRecs}
                  >
                    Suggest
                  </button>
                </div>
              </div>
            )}

            {/* loader for fetching recs */}
            {loadingRecs && (
              <div className="flex flex-row gap-3 items-center">
                <Loader size="w-8 h-8" />
                <div className="relative h-6 overflow-hidden">
                  <p
                    key={currentMsgIndex}
                    className="text-blue-400 font-semibold animate-fade-in-out"
                  >
                    {loadingMsgs[currentMsgIndex]} ...
                  </p>
                </div>
              </div>
            )}

            {/* recommended songs */}
            {suggestedSongs.length > 0 && (
              <div className="w-full space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  💡 Gemini Recommendations
                </h3>
                {showSongs(suggestedSongs)}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-out {
          animation: fadeInOut ${animationTimeSec}s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

const Loader = ({ className, size = "w-10 h-10" }) => {
  return (
    <div
      className={`border-4 border-blue-400 border-b-transparent animate-spin rounded-full ${size} ${className}`}
    />
  );
};

export default App;
