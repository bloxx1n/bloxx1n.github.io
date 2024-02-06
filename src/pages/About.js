import { useNavigate } from 'react-router-dom';

import '../css/About.css'

import Gameplay from '../assets/fnbpreview.mp4'
import Logo from '../assets/logo.png'

import Gamemode from '../components/Gamemode'
import Button from '../components/Button'

const Modes = [
    {
        Text: "Funkin",
        Description: "In Funkin, you must hit notes when they fully overlap the <b>note receptors</b>. Sometimes, you have to hold notes as well, and on certain songs, you have to avoid mines!<br /><br />Funkin's default controls are <b>WASD</b> and the <b>arrow keys.</b> You can change these in the settings menu.",
        Selected: "True"
    },
    {
        Text: "Taiko",
        Description: "In Taiko, you must hit the red (drum center) and blue notes (drum rim) to the beat of the song when they overlap the <b>note receptor.</b> Sometimes, songs even demand drumrolls and balloons!<br /><br />Taiko's default controls are <span style='color: blue; font-weight: bold; text-shadow: blue 0px 0px 2px;'>DK</span> for the rim of the drum and <span style='color: red; font-weight: bold; text-shadow: red 0px 0px 2px;'>FJ</span> for the center of the drum. You can change these in the settings menu.",
        Selected: "False"
    }
]

function GenerateModeButtons() {
    let Buttons = []

    Modes.map((Button) => {
        Buttons.push((
            <Gamemode
                Text={Button.Text}
                Description={Button.Description}
                Selected={Button.Selected}
            />
        ))
    })

    return Buttons
}

export default function About() {
    

    return (
        <div className="about">
            <div className="top">
                <img className="top-logo" src={Logo} alt="Orange colored logo that says FNB" />
                <video className="top-video" autoPlay muted loop>
                    <source src={Gameplay} />
                </video>
            </div>

            <div className="main">
                <div className="page">
                    <h1 className="header">WELCOME TO FNB!</h1>
                    <p className="description">
                        <b>Friday Night Bloxxin'</b> is a collection of rhythm game clones coded in Luau and hosted on Roblox. The game initially started off as a clone of Friday Night Funkin', but grew larger and larger to feature other <b>game modes</b>.
                        <br /><br />
                        You can play in both Singleplayer or Multiplayer against other players. in Multiplayer, the player who has the most score wins. The winner gets awarded with points that can be used to purchase animations, emotes, and more stuff found in the <b>Shop.</b>
                        <br /><br />
                        The game started development in 2021 by <b>Robotic_Developer</b>, who quit after certain unfortunate situations that occured because of the game. Ownership has since then been moved to <b>Ava</b> and <b>Eerie.</b>
                    </p>
                </div>

                <br />

                <div className="page">
                    <h1 className="header">WHAT MODES ARE THERE?</h1>

                    <div className="mode-container">
                        {
                            GenerateModeButtons()
                        }
                    </div>

                    <p className="description" id="mode-description" />
                </div>

                <br />

                <div className="page">
                    <h1 className="header">OK COOL, WHERE DO I PLAY IT?</h1>
                    <p className="description">
                        While the rewritten version is still in early development, you can still play the legacy version of Friday Night Bloxxin' on Roblox.<br /><br />
                        <Button
                            Text={"Play"}
                            Callback={() => {
                                window.location.replace("https://www.roblox.com/games/7603193259/THE-END-Friday-Night-Bloxxin?AssetId=7603193259")
                            }}
                        />
                    </p>
                </div>

                <br />
                <br />

                <div className="page">
                    <div className="center">
                        <Button          
                            Text={"Back"}
                            Destination={"/"}
                        />
                    </div>
                </div>
            </div>

            <div className="darken" />
            <div className="bg-container">
                <div className="bg" />
            </div>
        </div>
    )
}