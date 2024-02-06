import '../css/Home.css'

import Gameplay from '../assets/fnbpreview.mp4'
import Logo from '../assets/logo.png'

import Button from '../components/Button'

export default function Home() {
    return (
        <div className="home">
            <div className="topH">
                <img className="top-logo" src={Logo} alt="Orange colored logo that says FNB" />
                <video className="top-video" autoPlay muted loop>
                    <source src={Gameplay} />
                </video>
            </div>
            <div className="button-container">
                    <Button
                        Text={"Play"}
                        Callback={() => {
                            window.location.href = "https://www.roblox.com/games/7603193259/THE-END-Friday-Night-Bloxxin?AssetId=7603193259"
                        }}
                    />
                    <Button
                        Text={"About"}
                        Destination={"/about"}
                    />
                    <Button
                        Text={"Team"}
                        Destination={"/team"}
                    />
                </div>
        </div>
    )
}