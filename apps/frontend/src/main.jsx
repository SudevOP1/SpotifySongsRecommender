import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

let demoPlaylistData = {
        "name": "My Best",
        "songs": [
            {
                "name": "her",
                "artists": [
                    "JVKE"
                ],
                "song_url": "https://open.spotify.com/track/6G9YlbU3ByPJQvOFDRdwyM",
                "cover": "https://i.scdn.co/image/ab67616d00001e02a0934c15232680a3afc9da6e"
            },
            {
                "name": "Blinding Lights",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
                "cover": "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
            },
            {
                "name": "Sunflower - Spider-Man: Into the Spider-Verse",
                "artists": [
                    "Post Malone",
                    "Swae Lee"
                ],
                "song_url": "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P",
                "cover": "https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f"
            },
            {
                "name": "A Man Without Love (Everday I Wake Up) [from \"Moon Knight\"]",
                "artists": [
                    "Mega Anthem Hitz"
                ],
                "song_url": "https://open.spotify.com/track/0RZpaEhffTQYzVLEnKTrzG",
                "cover": "https://i.scdn.co/image/ab67616d00001e0282ed70b7147d824c6bc95a60"
            },
            {
                "name": "Tera Rastaa Chhodoon Na",
                "artists": [
                    "Vishal-Shekhar",
                    "Amitabh Bhattacharya",
                    "Anusha Mani"
                ],
                "song_url": "https://open.spotify.com/track/7cLGKaJXLFpUU7Up34vVr1",
                "cover": "https://i.scdn.co/image/ab67616d00001e02dfd1ddf5b8431d6fc5210d6c"
            },
            {
                "name": "golden hour",
                "artists": [
                    "JVKE"
                ],
                "song_url": "https://open.spotify.com/track/5odlY52u43F5BjByhxg7wg",
                "cover": "https://i.scdn.co/image/ab67616d00001e02c2504e80ba2f258697ab2954"
            },
            {
                "name": "Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)",
                "artists": [
                    "The Weeknd",
                    "Playboi Carti",
                    "Madonna"
                ],
                "song_url": "https://open.spotify.com/track/6WzRpISELf3YglGAh7TXcG",
                "cover": "https://i.scdn.co/image/ab67616d00001e024c8f092adc59b4bf4212389d"
            },
            {
                "name": "Starboy",
                "artists": [
                    "The Weeknd",
                    "Daft Punk"
                ],
                "song_url": "https://open.spotify.com/track/5aAx2yezTd8zXrkmtKl66Z",
                "cover": "https://i.scdn.co/image/ab67616d00001e020c8599cbde51245c128bcea9"
            },
            {
                "name": "Blue Eyes",
                "artists": [
                    "Yo Yo Honey Singh"
                ],
                "song_url": "https://open.spotify.com/track/7wW9scVNLYFLsmBb1yAUmS",
                "cover": "https://i.scdn.co/image/ab67616d00001e0246a4f62d210c2cb02158eac7"
            },
            {
                "name": "Attention",
                "artists": [
                    "Charlie Puth"
                ],
                "song_url": "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50",
                "cover": "https://i.scdn.co/image/ab67616d00001e02897f73256b9128a9d70eaf66"
            },
            {
                "name": "The Real Slim Shady",
                "artists": [
                    "Eminem"
                ],
                "song_url": "https://open.spotify.com/track/3yfqSUWxFvZELEM4PmlwIR",
                "cover": "https://i.scdn.co/image/ab67616d00001e02dbb3dd82da45b7d7f31b1b42"
            },
            {
                "name": "Kaun Tujhe (From \"M.S.Dhoni - The Untold Story\")",
                "artists": [
                    "Palak Muchhal"
                ],
                "song_url": "https://open.spotify.com/track/1q6pMQBRILzkz0g4rKEXdM",
                "cover": "https://i.scdn.co/image/ab67616d00001e02808542d48ec7021a0577f4f5"
            },
            {
                "name": "Sajni (From \"Laapataa Ladies\")",
                "artists": [
                    "Ram Sampath",
                    "Arijit Singh",
                    "Prashant Pandey"
                ],
                "song_url": "https://open.spotify.com/track/5zCnGtCl5Ac5zlFHXaZmhy",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d5f4378b1ffc9119fdc7306d"
            },
            {
                "name": "Naina Da Kya Kasoor",
                "artists": [
                    "Amit Trivedi"
                ],
                "song_url": "https://open.spotify.com/track/2g3o6I7YuKFEUn9OOfuAfP",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d71d2e2ca2f49bd019476930"
            },
            {
                "name": "Wo Ladki",
                "artists": [
                    "Amit Trivedi",
                    "Arijit Singh"
                ],
                "song_url": "https://open.spotify.com/track/21GNvMdRqehDvAb2g3T5rx",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d71d2e2ca2f49bd019476930"
            },
            {
                "name": "Shaayraana",
                "artists": [
                    "Arijit Singh",
                    "Pritam"
                ],
                "song_url": "https://open.spotify.com/track/0EZTe2i9yDYsYVO1YNEVZf",
                "cover": "https://i.scdn.co/image/ab67616d00001e025b82c9cb2b20c1c14b2be308"
            },
            {
                "name": "Not Like Us",
                "artists": [
                    "Kendrick Lamar"
                ],
                "song_url": "https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3",
                "cover": "https://i.scdn.co/image/ab67616d00001e021ea0c62b2339cbf493a999ad"
            },
            {
                "name": "Money Trees",
                "artists": [
                    "Kendrick Lamar",
                    "Jay Rock"
                ],
                "song_url": "https://open.spotify.com/track/74tLlkN3rgVzRqQJgPfink",
                "cover": "https://i.scdn.co/image/ab67616d00001e022cd55246d935a8a77cb4859e"
            },
            {
                "name": "Back In Black",
                "artists": [
                    "AC/DC"
                ],
                "song_url": "https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj",
                "cover": "https://i.scdn.co/image/ab67616d00001e020b51f8d91f3a21e8426361ae"
            },
            {
                "name": "tv off (feat. lefty gunplay)",
                "artists": [
                    "Kendrick Lamar",
                    "Lefty Gunplay"
                ],
                "song_url": "https://open.spotify.com/track/0aB0v4027ukVziUGwVGYpG",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58"
            },
            {
                "name": "Sh-Boom (Life Could Be a Dream)",
                "artists": [
                    "The Chords"
                ],
                "song_url": "https://open.spotify.com/track/0GqChhBLTIHEr07iKnbb3W",
                "cover": "https://i.scdn.co/image/ab67616d00001e021c58f5beb4c8740df65d8e6a"
            },
            {
                "name": "Highway to Hell",
                "artists": [
                    "AC/DC"
                ],
                "song_url": "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s",
                "cover": "https://i.scdn.co/image/ab67616d00001e0251c02a77d09dfcd53c8676d0"
            },
            {
                "name": "All The Stars (with SZA) - From \"Black Panther: The Album\"",
                "artists": [
                    "Kendrick Lamar",
                    "SZA"
                ],
                "song_url": "https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s",
                "cover": "https://i.scdn.co/image/ab67616d00001e02c027ad28821777b00dcaa888"
            },
            {
                "name": "Alone",
                "artists": [
                    "Marshmello"
                ],
                "song_url": "https://open.spotify.com/track/3MEYFivt6bilQ9q9mFWZ4g",
                "cover": "https://i.scdn.co/image/ab67616d00001e02956043cfb058f0be93022267"
            },
            {
                "name": "Can You Hear The Music",
                "artists": [
                    "Ludwig Göransson"
                ],
                "song_url": "https://open.spotify.com/track/4VnDmjYCZkyeqeb0NIKqdA",
                "cover": "https://i.scdn.co/image/ab67616d00001e02af634982d9b15de3c77f7dd9"
            },
            {
                "name": "Without Me",
                "artists": [
                    "Eminem"
                ],
                "song_url": "https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk",
                "cover": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4"
            },
            {
                "name": "I Feel It Coming",
                "artists": [
                    "The Weeknd",
                    "Daft Punk"
                ],
                "song_url": "https://open.spotify.com/track/5GXAXm5YOmYT0kL5jHvYBt",
                "cover": "https://i.scdn.co/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a"
            },
            {
                "name": "Tauba Tauba",
                "artists": [
                    "Karan Aujla"
                ],
                "song_url": "https://open.spotify.com/track/25Nxyrng0Z3jC5Q0hAibpw",
                "cover": "https://i.scdn.co/image/ab67616d00001e02e1e330d774b305917db5fa82"
            },
            {
                "name": "this is what space feels like",
                "artists": [
                    "JVKE"
                ],
                "song_url": "https://open.spotify.com/track/6PetYmvjKZBjiUYlnlAcn1",
                "cover": "https://i.scdn.co/image/ab67616d00001e02b4bf03e0316b9835600c55af"
            },
            {
                "name": "The Next Episode",
                "artists": [
                    "Dr. Dre",
                    "Snoop Dogg"
                ],
                "song_url": "https://open.spotify.com/track/4LwU4Vp6od3Sb08CsP99GC",
                "cover": "https://i.scdn.co/image/ab67616d00001e029b19c107109de740bad72df5"
            },
            {
                "name": "One Dance",
                "artists": [
                    "Drake",
                    "Wizkid",
                    "Kyla"
                ],
                "song_url": "https://open.spotify.com/track/1zi7xx7UVEFkmKfv06H8x0",
                "cover": "https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c"
            },
            {
                "name": "Dj Waley Babu (feat. Aastha Gill)",
                "artists": [
                    "Badshah",
                    "Aastha Gill"
                ],
                "song_url": "https://open.spotify.com/track/5VKvDHouRJ4a8VNXrzTWnc",
                "cover": "https://i.scdn.co/image/ab67616d00001e027b8d8ca1a8e14506c8f35233"
            },
            {
                "name": "Rasputin",
                "artists": [
                    "Boney M."
                ],
                "song_url": "https://open.spotify.com/track/5lWSa1rmuSL6OBPOnkAqoa",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d792d961638fd28f8d281947"
            },
            {
                "name": "In Da Club",
                "artists": [
                    "50 Cent"
                ],
                "song_url": "https://open.spotify.com/track/7iL6o9tox1zgHpKUfh9vuC",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d843fabb75fef14010e30cae"
            },
            {
                "name": "Sing For The Moment",
                "artists": [
                    "Eminem"
                ],
                "song_url": "https://open.spotify.com/track/3CpoeW0cZSDzIRv5z34F87",
                "cover": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4"
            },
            {
                "name": "Somebody That I Used To Know",
                "artists": [
                    "Gotye",
                    "Kimbra"
                ],
                "song_url": "https://open.spotify.com/track/1qDrWA6lyx8cLECdZE7TV7",
                "cover": "https://i.scdn.co/image/ab67616d00001e028ac5768205ad97df3f4f4c0e"
            },
            {
                "name": "The Hills",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB",
                "cover": "https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b"
            },
            {
                "name": "Runaway",
                "artists": [
                    "Kanye West",
                    "Pusha T"
                ],
                "song_url": "https://open.spotify.com/track/3DK6m7It6Pw857FcQftMds",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f"
            },
            {
                "name": "Die For You",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/2LBqCSwhJGcFQeTHMVGwy3",
                "cover": "https://i.scdn.co/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a"
            },
            {
                "name": "Jugnu",
                "artists": [
                    "Badshah",
                    "Nikhita Gandhi"
                ],
                "song_url": "https://open.spotify.com/track/4GI6sk4q4Keg9BMdCHLq5r",
                "cover": "https://i.scdn.co/image/ab67616d00001e028379b5acbdafbe3c9e7c32af"
            },
            {
                "name": "Soviet Connection (Theme from GTA IV)",
                "artists": [
                    "Michael Hunter"
                ],
                "song_url": "https://open.spotify.com/track/4VWmybjnJ0Oh0PEkNaH2f8",
                "cover": "https://i.scdn.co/image/ab67616d00001e0244faa79cb92834c802683f27"
            },
            {
                "name": "Grand Theft Auto: San Andreas (Official Theme Song)",
                "artists": [
                    "Michael Hunter"
                ],
                "song_url": "https://open.spotify.com/track/724X0Tdkai2En19Vi1HGUH",
                "cover": "https://i.scdn.co/image/ab67616d00001e02f8d9bdb33b7a4d6098a77446"
            },
            {
                "name": "METAMORPHOSIS",
                "artists": [
                    "INTERWORLD"
                ],
                "song_url": "https://open.spotify.com/track/2ksyzVfU0WJoBpu8otr4pz",
                "cover": "https://i.scdn.co/image/ab67616d00001e02b852a616ae3a49a1f6b0f16e"
            },
            {
                "name": "Smack That",
                "artists": [
                    "Akon",
                    "Eminem"
                ],
                "song_url": "https://open.spotify.com/track/2kQuhkFX7uSVepCD3h29g5",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d9bcf5565005950b353bc9cf"
            },
            {
                "name": "Rush E",
                "artists": [
                    "Sheet Music Boss"
                ],
                "song_url": "https://open.spotify.com/track/7CBN7Kwx1g8SBJZyUbhHc6",
                "cover": "https://i.scdn.co/image/ab67616d00001e02f93da49fb50947a8953cd1df"
            },
            {
                "name": "Save Your Tears",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g",
                "cover": "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
            },
            {
                "name": "Levitating (feat. DaBaby)",
                "artists": [
                    "Dua Lipa",
                    "DaBaby"
                ],
                "song_url": "https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF",
                "cover": "https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4"
            },
            {
                "name": "Soul Survivor",
                "artists": [
                    "Jeezy",
                    "Akon"
                ],
                "song_url": "https://open.spotify.com/track/12bZjnzjuJoyRslVC4BmxU",
                "cover": "https://i.scdn.co/image/ab67616d00001e0237776d19b25f070c7ee646bb"
            },
            {
                "name": "Candy Shop",
                "artists": [
                    "50 Cent",
                    "Olivia"
                ],
                "song_url": "https://open.spotify.com/track/5D2mYZuzcgjpchVY1pmTPh",
                "cover": "https://i.scdn.co/image/ab67616d00001e0291f7222996c531b981e7bb3d"
            },
            {
                "name": "WWE: The Time Is Now (John Cena)",
                "artists": [
                    "WWE",
                    "John Cena",
                    "Tha Trademarc"
                ],
                "song_url": "https://open.spotify.com/track/0wlVropyv3VsqG5HepMfu2",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d04363a5a0a8d0d072774d13"
            },
            {
                "name": "São Paulo (feat. Anitta)",
                "artists": [
                    "The Weeknd",
                    "Anitta"
                ],
                "song_url": "https://open.spotify.com/track/7DY756WOLyOz2Xnhw4EFiC",
                "cover": "https://i.scdn.co/image/ab67616d00001e02982320da137d0de34410df61"
            },
            {
                "name": "One Of The Girls (with JENNIE, Lily Rose Depp)",
                "artists": [
                    "The Weeknd",
                    "JENNIE",
                    "Lily-Rose Depp"
                ],
                "song_url": "https://open.spotify.com/track/7CyPwkp0oE8Ro9Dd5CUDjW",
                "cover": "https://i.scdn.co/image/ab67616d00001e02b0dd6a5cd1dec96c4119c262"
            },
            {
                "name": "Moth To A Flame (with The Weeknd)",
                "artists": [
                    "Swedish House Mafia",
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/0VO8gYVDSwM1Qdd2GsMoYK",
                "cover": "https://i.scdn.co/image/ab67616d00001e02bd6f8ac82dc5fe1028c14f7d"
            },
            {
                "name": "Timeless (feat Playboi Carti)",
                "artists": [
                    "The Weeknd",
                    "Playboi Carti"
                ],
                "song_url": "https://open.spotify.com/track/0FIDCNYYjNvPVimz5icugS",
                "cover": "https://i.scdn.co/image/ab67616d00001e02982320da137d0de34410df61"
            },
            {
                "name": "Heat Waves",
                "artists": [
                    "Glass Animals"
                ],
                "song_url": "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx",
                "cover": "https://i.scdn.co/image/ab67616d00001e029e495fb707973f3390850eea"
            },
            {
                "name": "Cry For Me",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/3AWDeHLc88XogCaCnZQLVI",
                "cover": "https://i.scdn.co/image/ab67616d00001e02982320da137d0de34410df61"
            },
            {
                "name": "In Da Getto",
                "artists": [
                    "J Balvin",
                    "Skrillex"
                ],
                "song_url": "https://open.spotify.com/track/1q0PYXTbDsirp2l74ng6pn",
                "cover": "https://i.scdn.co/image/ab67616d00001e02922a7339d969b5f0262580f5"
            },
            {
                "name": "Moonlight",
                "artists": [
                    "XXXTENTACION"
                ],
                "song_url": "https://open.spotify.com/track/0JP9xo3adEtGSdUEISiszL",
                "cover": "https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c"
            },
            {
                "name": "goosebumps",
                "artists": [
                    "Travis Scott"
                ],
                "song_url": "https://open.spotify.com/track/6gBFPUFcJLzWGx4lenP6h2",
                "cover": "https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce"
            },
            {
                "name": "Bones",
                "artists": [
                    "Imagine Dragons"
                ],
                "song_url": "https://open.spotify.com/track/54ipXppHLA8U4yqpOFTUhr",
                "cover": "https://i.scdn.co/image/ab67616d00001e02fc915b69600dce2991a61f13"
            },
            {
                "name": "SICKO MODE",
                "artists": [
                    "Travis Scott"
                ],
                "song_url": "https://open.spotify.com/track/2xLMifQCjDGFmkHkpNLD9h",
                "cover": "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"
            },
            {
                "name": "Like Him (feat. Lola Young)",
                "artists": [
                    "Tyler, The Creator",
                    "Lola Young"
                ],
                "song_url": "https://open.spotify.com/track/6jbYpRPTEFl1HFKHk1IC0m",
                "cover": "https://i.scdn.co/image/ab67616d00001e02124e9249fada4ff3c3a0739c"
            },
            {
                "name": "I Was Never There",
                "artists": [
                    "The Weeknd",
                    "Gesaffelstein"
                ],
                "song_url": "https://open.spotify.com/track/1cKHdTo9u0ZymJdPGSh6nq",
                "cover": "https://i.scdn.co/image/ab67616d00001e021f6a2a40bb692936879db730"
            },
            {
                "name": "Die With A Smile",
                "artists": [
                    "Lady Gaga",
                    "Bruno Mars"
                ],
                "song_url": "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe",
                "cover": "https://i.scdn.co/image/ab67616d00001e0282ea2e9e1858aa012c57cd45"
            },
            {
                "name": "Azadi",
                "artists": [
                    "Dub Sharma",
                    "DIVINE"
                ],
                "song_url": "https://open.spotify.com/track/1NT0G4gcwljQk6o71vupty",
                "cover": "https://i.scdn.co/image/ab67616d00001e0299241710b1b1b590b79d444e"
            },
            {
                "name": "Sapphire",
                "artists": [
                    "Ed Sheeran"
                ],
                "song_url": "https://open.spotify.com/track/4Q0qVhFQa7j6jRKzo3HDmP",
                "cover": "https://i.scdn.co/image/ab67616d00001e026fbb60d6a7e03ccb940a518e"
            },
            {
                "name": "FRIENDS",
                "artists": [
                    "Marshmello",
                    "Anne-Marie"
                ],
                "song_url": "https://open.spotify.com/track/1wIyr1y5wiWqo7nqbxHpWt",
                "cover": "https://i.scdn.co/image/ab67616d00001e02e2c879f3983d1488f2c3ca4e"
            },
            {
                "name": "Father Stretch My Hands Pt. 1",
                "artists": [
                    "Kanye West"
                ],
                "song_url": "https://open.spotify.com/track/4KW1lqgSr8TKrvBII0Brf8",
                "cover": "https://i.scdn.co/image/ab67616d00001e022a7db835b912dc5014bd37f4"
            },
            {
                "name": "Gangnam Style (강남스타일)",
                "artists": [
                    "PSY"
                ],
                "song_url": "https://open.spotify.com/track/03UrZgTINDqvnUMbbIMhql",
                "cover": "https://i.scdn.co/image/ab67616d00001e026cfc57e5358c5e39e79bccbd"
            },
            {
                "name": "Funk de Beleza - Slowed",
                "artists": [
                    "Nateki",
                    "Scythermane",
                    "MC MAYAH"
                ],
                "song_url": "https://open.spotify.com/track/43jExF2HeZ6cJIGrWF0ie4",
                "cover": "https://i.scdn.co/image/ab67616d00001e0282b73e1b62eda395d6627542"
            },
            {
                "name": "Run It Up",
                "artists": [
                    "Hanumankind"
                ],
                "song_url": "https://open.spotify.com/track/3sZQ8L4aptFDJXBqdVdvO8",
                "cover": "https://i.scdn.co/image/ab67616d00001e0286eb61be5784dcfbff4ed1ad"
            },
            {
                "name": "Triple OG",
                "artists": [
                    "DIVINE",
                    "Phenom"
                ],
                "song_url": "https://open.spotify.com/track/5PvdeOHYM1Te6XB1C81zoz",
                "cover": "https://i.scdn.co/image/ab67616d00001e02dda096d645f97ed3bc4a6366"
            },
            {
                "name": "Immigrant Song - Remaster",
                "artists": [
                    "Led Zeppelin"
                ],
                "song_url": "https://open.spotify.com/track/78lgmZwycJ3nzsdgmPPGNx",
                "cover": "https://i.scdn.co/image/ab67616d00001e0290a50cfe99a4c19ff3cbfbdb"
            },
            {
                "name": "DIA DELÍCIA",
                "artists": [
                    "Nakama",
                    "Mc Staff",
                    "ΣP"
                ],
                "song_url": "https://open.spotify.com/track/094IjHeVUviN4aBnSXYsuj",
                "cover": "https://i.scdn.co/image/ab67616d00001e029246fa656b3b831c60c42fd3"
            },
            {
                "name": "Murder In My Mind",
                "artists": [
                    "Kordhell"
                ],
                "song_url": "https://open.spotify.com/track/6qyS9qBy0mEk3qYaH8mPss",
                "cover": "https://i.scdn.co/image/ab67616d00001e021440ffaa43c53d65719e0150"
            },
            {
                "name": "Machayenge",
                "artists": [
                    "Emiway Bantai"
                ],
                "song_url": "https://open.spotify.com/track/5yUxKeTYbocSVfT1BUWJpb",
                "cover": "https://i.scdn.co/image/ab67616d00001e02aa2dc81537251e63fc44b2fd"
            },
            {
                "name": "Bhayanak Atma",
                "artists": [
                    "Nucleya",
                    "Gagan Mudgal"
                ],
                "song_url": "https://open.spotify.com/track/4Xgmn95texORroGsAUu3sY",
                "cover": "https://i.scdn.co/image/ab67616d00001e02488f991870f6209708b08740"
            },
            {
                "name": "i'm not okay",
                "artists": [
                    "JVKE"
                ],
                "song_url": "https://open.spotify.com/track/1fiSki9Yy5lekUUpV4mByo",
                "cover": "https://i.scdn.co/image/ab67616d00001e02c2504e80ba2f258697ab2954"
            },
            {
                "name": "Love The Way You Lie",
                "artists": [
                    "Eminem",
                    "Rihanna"
                ],
                "song_url": "https://open.spotify.com/track/15JINEqzVMv3SvJTAXAKED",
                "cover": "https://i.scdn.co/image/ab67616d00001e02c08d5fa5c0f1a834acef5100"
            },
            {
                "name": "After Hours",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/2p8IUWQDrpjuFltbdgLOag",
                "cover": "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
            },
            {
                "name": "fukumean",
                "artists": [
                    "Gunna"
                ],
                "song_url": "https://open.spotify.com/track/4rXLjWdF2ZZpXCVTfWcshS",
                "cover": "https://i.scdn.co/image/ab67616d00001e02017d5e26552345c4b1575b6c"
            },
            {
                "name": "Big Dawgs",
                "artists": [
                    "Hanumankind",
                    "Kalmi"
                ],
                "song_url": "https://open.spotify.com/track/0OA00aPt3BV10qeMIs3meW",
                "cover": "https://i.scdn.co/image/ab67616d00001e02d9afe5c70c43cb2bd34605ea"
            },
            {
                "name": "One Kiss (with Dua Lipa)",
                "artists": [
                    "Calvin Harris",
                    "Dua Lipa"
                ],
                "song_url": "https://open.spotify.com/track/76dIZzTdrNO15mGBrU3MHi",
                "cover": "https://i.scdn.co/image/ab67616d00001e028daa8ac6367fc997c1873b9b"
            },
            {
                "name": "No Lie",
                "artists": [
                    "Sean Paul",
                    "Dua Lipa"
                ],
                "song_url": "https://open.spotify.com/track/48QmG1dfvMuYLxMPt7KSRA",
                "cover": "https://i.scdn.co/image/ab67616d00001e022d564195ed3dd7b70d64862c"
            },
            {
                "name": "Innerbloom",
                "artists": [
                    "RÜFÜS DU SOL"
                ],
                "song_url": "https://open.spotify.com/track/05kVyNUR9uibHta4jcGTTv",
                "cover": "https://i.scdn.co/image/ab67616d00001e02de342b284f5dc7e0257fe38c"
            },
            {
                "name": "Call Out My Name",
                "artists": [
                    "The Weeknd"
                ],
                "song_url": "https://open.spotify.com/track/09mEdoA6zrmBPgTEN5qXmN",
                "cover": "https://i.scdn.co/image/ab67616d00001e021f6a2a40bb692936879db730"
            },
            {
                "name": "New Rules",
                "artists": [
                    "Dua Lipa"
                ],
                "song_url": "https://open.spotify.com/track/2xJCMIJfcNYDc5iR0sAm2O",
                "cover": "https://i.scdn.co/image/ab67616d00001e027833c9a792ad032d788d4011"
            },
            {
                "name": "sdp interlude",
                "artists": [
                    "Travis Scott"
                ],
                "song_url": "https://open.spotify.com/track/4gh0ZnHzaTMT1sDga7Ek0N",
                "cover": "https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce"
            },
            {
                "name": "I Like It",
                "artists": [
                    "Cardi B",
                    "Bad Bunny",
                    "J Balvin"
                ],
                "song_url": "https://open.spotify.com/track/58q2HKrzhC3ozto2nDdN4z",
                "cover": "https://i.scdn.co/image/ab67616d00001e02a0caffda54afd0a65995bbab"
            },
            {
                "name": "Pray For Me",
                "artists": [
                    "The Weeknd",
                    "Kendrick Lamar"
                ],
                "song_url": "https://open.spotify.com/track/6huNf4dutXRjJyGn7f5BPS",
                "cover": "https://i.scdn.co/image/ab67616d00001e0212a76d1b13ef07188f7dfbc9"
            },
            {
                "name": "Don't Start Now",
                "artists": [
                    "Dua Lipa"
                ],
                "song_url": "https://open.spotify.com/track/3PfIrDoz19wz7qK7tYeu62",
                "cover": "https://i.scdn.co/image/ab67616d00001e024bc66095f8a70bc4e6593f4f"
            },
            {
                "name": "Closer",
                "artists": [
                    "The Chainsmokers",
                    "Halsey"
                ],
                "song_url": "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw",
                "cover": "https://i.scdn.co/image/ab67616d00001e02495ce6da9aeb159e94eaa453"
            },
            {
                "name": "GDFR (feat. Sage the Gemini & Lookas)",
                "artists": [
                    "Flo Rida",
                    "Sage The Gemini",
                    "Lookas"
                ],
                "song_url": "https://open.spotify.com/track/26rdOwwjC2UnweK3xeS58u",
                "cover": "https://i.scdn.co/image/ab67616d00001e027947bf3e8af32378de181b41"
            },
            {
                "name": "Sorry",
                "artists": [
                    "Justin Bieber"
                ],
                "song_url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
                "cover": "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de"
            },
            {
                "name": "Bangarang (feat. Sirah)",
                "artists": [
                    "Skrillex",
                    "Sirah"
                ],
                "song_url": "https://open.spotify.com/track/6VRhkROS2SZHGlp0pxndbJ",
                "cover": "https://i.scdn.co/image/ab67616d00001e026081278cb62df2757d55633b"
            },
            {
                "name": "Baby",
                "artists": [
                    "Justin Bieber",
                    "Ludacris"
                ],
                "song_url": "https://open.spotify.com/track/6epn3r7S14KUqlReYr77hA",
                "cover": "https://i.scdn.co/image/ab67616d00001e02629dc9e2e3bc20bbd7d92e4a"
            },
            {
                "name": "Taambdi Chaamdi",
                "artists": [
                    "Kratex",
                    "Shreyas"
                ],
                "song_url": "https://open.spotify.com/track/14M0pSvqNEhPdByBNw159R",
                "cover": "https://i.scdn.co/image/ab67616d00001e02409b57b085762bdc0e20456a"
            },
            {
                "name": "The Less I Know The Better",
                "artists": [
                    "Tame Impala"
                ],
                "song_url": "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
                "cover": "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79"
            },
            {
                "name": "Let It Happen",
                "artists": [
                    "Tame Impala"
                ],
                "song_url": "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed",
                "cover": "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79"
            },
            {
                "name": "Borderline",
                "artists": [
                    "Tame Impala"
                ],
                "song_url": "https://open.spotify.com/track/5hM5arv9KDbCHS0k9uqwjr",
                "cover": "https://i.scdn.co/image/ab67616d00001e0258267bd34420a00d5cf83a49"
            },
            {
                "name": "One More Hour",
                "artists": [
                    "Tame Impala"
                ],
                "song_url": "https://open.spotify.com/track/0mO6oS60RST2sWmN2FKknP",
                "cover": "https://i.scdn.co/image/ab67616d00001e0258267bd34420a00d5cf83a49"
            },
            {
                "name": "Thunderstruck",
                "artists": [
                    "AC/DC"
                ],
                "song_url": "https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj",
                "cover": "https://i.scdn.co/image/ab67616d00001e028399047ff71200928f5b6508"
            },
            {
                "name": "Superman",
                "artists": [
                    "Eminem",
                    "Dina Rae"
                ],
                "song_url": "https://open.spotify.com/track/4woTEX1wYOTGDqNXuavlRC",
                "cover": "https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4"
            },
            {
                "name": "Little Dark Age",
                "artists": [
                    "MGMT"
                ],
                "song_url": "https://open.spotify.com/track/2Y0iGXY6m6immVb2ktbseM",
                "cover": "https://i.scdn.co/image/ab67616d00001e02b47d309281c66820b7137f5d"
            }
        ]
    }

let demoRecsData = [
        {
            "name": "Circles",
            "artists": [
                "Post Malone"
            ],
            "song_url": "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb",
            "cover": "https://i.scdn.co/image/ab67616d00001e029478c87599550dd73bfa7e02",
            "reason": "Shares the melancholic, synth-heavy pop-rock vibe of The Weeknd's 'Blinding Lights' and Post Malone's own 'Sunflower' from your list.",
            "found": true
        },
        {
            "name": "Nights",
            "artists": [
                "Frank Ocean"
            ],
            "song_url": "https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ",
            "cover": "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
            "reason": "If you enjoy the introspective lyricism and complex production of Kendrick Lamar and Kanye West's 'Runaway', this iconic alternative R&B track is essential.",
            "found": true
        },
        {
            "name": "As It Was",
            "artists": [
                "Harry Styles"
            ],
            "song_url": "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e",
            "cover": "https://i.scdn.co/image/ab67616d00001e022e8ed79e177ff6011076f5f0",
            "reason": "This song's 80s-inspired synth-pop and driving beat will appeal to your love for The Weeknd, Dua Lipa, and JVKE's 'golden hour'.",
            "found": true
        },
        {
            "name": "No Role Modelz",
            "artists": [
                "J. Cole"
            ],
            "song_url": "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr",
            "cover": "https://i.scdn.co/image/ab67616d00001e02c6e0948bbb0681ff29cdbae8",
            "reason": "Your appreciation for storytelling and lyrical rappers like Eminem and Kendrick Lamar makes this a perfect fit, blending sharp verses with a catchy hook.",
            "found": true
        },
        {
            "name": "Electric Feel",
            "artists": [
                "MGMT"
            ],
            "song_url": "https://open.spotify.com/track/3FtYbEfBqAlGO46NUDQSAt",
            "cover": "https://i.scdn.co/image/ab67616d00001e028b32b139981e79f2ebe005eb",
            "reason": "Based on your enjoyment of Tame Impala's psychedelic sound, this track offers a similar groovy, synth-led, and dreamy indie-pop experience.",
            "found": true
        },
        {
            "name": "Pasoori (Originally Performed by Shae Gill & Ali Sethi) [Instrumental Version]",
            "artists": [
                "Backing Business"
            ],
            "song_url": "https://open.spotify.com/track/4LehyAQ2CGlnpw2JdVAg8W",
            "cover": "https://i.scdn.co/image/ab67616d00001e02ba25288c1694727690b74a83",
            "reason": "Given your taste for modern Bollywood hits like 'Sajni' and 'Shaayraana', this global sensation blends classical South Asian melodies with a contemporary feel.",
            "found": true
        },
        {
            "name": "Welcome To The Jungle",
            "artists": [
                "Guns N' Roses"
            ],
            "song_url": "https://open.spotify.com/track/0G21yYKMZoHa30cYVi1iA8",
            "cover": "https://i.scdn.co/image/ab67616d00001e0221ebf49b3292c3f0f575f0f5",
            "reason": "Matches the high-energy, rebellious, and riff-heavy classic rock of AC/DC's 'Back In Black' and 'Highway to Hell'.",
            "found": true
        },
        {
            "name": "FE!N (feat. Playboi Carti)",
            "artists": [
                "Travis Scott",
                "Playboi Carti"
            ],
            "song_url": "https://open.spotify.com/track/42VsgItocQwOQC3XWZ8JNA",
            "cover": "https://i.scdn.co/image/ab67616d00001e02881d8d8378cd01099babcd44",
            "reason": "Since you like 'SICKO MODE' and 'Timeless', this energetic and hypnotic trap banger from Travis Scott and Playboi Carti will fit right into your hype playlist.",
            "found": true
        },
        {
            "name": "A Moment Apart",
            "artists": [
                "ODESZA"
            ],
            "song_url": "https://open.spotify.com/track/59wlTaYOL5tDUgXnbBQ3my",
            "cover": "https://i.scdn.co/image/ab67616d00001e0245951a69fe39a6e163122eab",
            "reason": "Your list includes cinematic music like 'Can You Hear The Music' and atmospheric EDM like 'Innerbloom'. This track delivers a similar grand, emotional, and epic electronic sound.",
            "found": true
        },
        {
            "name": "Mr. Brightside",
            "artists": [
                "The Killers"
            ],
            "song_url": "https://open.spotify.com/track/003vvx7Niy0yvhvHt4a68B",
            "cover": "https://i.scdn.co/image/ab67616d00001e02ccdddd46119a4ff53eaf1f5d",
            "reason": "This song's high-octane, anthemic energy bridges the gap between your rock (AC/DC) and pop (Dua Lipa) selections, with a timeless quality you enjoy in tracks like 'Rasputin'.",
            "found": true
        }
    ]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App demoPlaylistData={demoPlaylistData} demoRecsData={demoRecsData} />
  </StrictMode>
);
