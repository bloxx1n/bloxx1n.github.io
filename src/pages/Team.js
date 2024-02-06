import { useNavigate } from 'react-router-dom';

import '../css/About.css'

import Gameplay from '../assets/fnbpreview.mp4'
import Logo from '../assets/logo.png'

import Button from '../components/Button'

export default function Team() {
    

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
                    <h1 className="header">THE TEAM</h1>
                    <h2>PROGRAMMERS</h2>
                    <ul>
                        <li>Eerie</li>
                        <li>fq0e</li>
                    </ul>
                    <br />
                    <h2>BUILDERS</h2>
                    <ul>
                        <li>TreeFitten</li>
                        <li>ozzyxq</li>
                        <li>SMC5</li>
                        <li>Eris</li>
                    </ul>
                    <br />
                    <h2>ANIMATORS</h2>
                    <ul>
                        <li>TreeFitten</li>
                        <li>Kotek</li>
                        <li>Risuu</li>
                        <li>Skemmeow</li>sk
                        <li>Carlos</li>
                    </ul>
                    <br />
                    <h2>CHARTERS</h2>
                    <ul>
                        <li>Skemmeow</li>
                        <li>Salt</li>
                        <li>TheBoi</li>
                    </ul>
                    <br />
                    <h2>UI DESIGNERS</h2>
                    <ul>
                        <li>vl1</li>
                        <li>fq0e</li>
                    </ul>
                    <br />
                    <h2>ARTISTS</h2>
                    <ul>
                        <li>Ramdom</li>
                        <li>TreeFitten</li>
                        <li>v1z</li>                        
                    </ul>
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