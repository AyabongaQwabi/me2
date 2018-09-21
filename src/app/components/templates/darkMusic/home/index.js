
import React, {Component} from 'react';
import { FlexContainer, SongBox } from '../../../organisms';
import './style.scss'
import picsa from '../../../../style/image/picsa.svg'
import simply from '../../../../style/image/simply.svg'
import avatar from '../../../../style/image/aya.png'
import linkedIn from '../../../../style/image/lnkd.svg'
import github from '../../../../style/image/git.png'
import codepen from '../../../../style/image/cdp.png'
import profiler from '../../../../style/image/profile.png'
import art from '../../../../style/image/art2.png'

import ingoma from '../../../../static/Ingoma.mp3';
import ayajam from '../../../../static/ayajam.mp3';
import jack from '../../../../static/jack.mp3';
import soliloq from '../../../../static/soliloq.mp3';
import slowjam from '../../../../static/slowjam.mp3';
import door from '../../../../static/door2.mp4';

import "../../../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';


export default class home extends Component{
    constructor(){
        super();
        this.state = { videoHasStopped: false}
        this.onVideoEnd = this.onVideoEnd.bind(this);
    }

    onVideoEnd(){
        this.setState({videoHasStopped:true})
    }
    render(){
        const videoHasStoppedVideo = this.state.videoHasStopped ? 'video-stopped-video' : 'video-playing-cid';
        const videoHasStoppedInfo = this.state.videoHasStopped ? 'video-stopped-info' : 'video-playing';
        return(
            <div>
                <FlexContainer direction='row' isMaster>
                    <FlexContainer size={2} direction='column' className="music" isScrollable>
                        <SongBox src={jack} albumArt={art} title="A tribute to Jack" artist='Ayabonga Qwabi' isFlexible  />
                        <SongBox src={slowjam} albumArt={art} title="Makinsg of a slow jam" artist='Ayabonga Qwabi' isFlexible />
                        <SongBox src={soliloq} albumArt={art} title="Soli Lock" artist='Ayabonga Qwabi' isFlexible />
                        <SongBox src={ayajam} albumArt={art} title="Let's Jam" artist='Ayabonga Qwabi' isFlexible />
                        <SongBox src={ingoma} albumArt={art} title="Ingoma" artist='Ayabonga Qwabi' isFlexible />
                    </FlexContainer>

                    <FlexContainer size={2} direction='column' className="about">
                        <FlexContainer size={1} direction='column' className="area">
                        </FlexContainer>
                        <FlexContainer size={1} direction='column' className="avatar area">
                            <img src={avatar} alt='avatar' className='avatar-img'  />
                            <p>Maker - Developer - Geek - 9Gager - Philosophy Enthusiast -  Human - Deep House Lover</p>
                            <div className="icons">
                                <a>
                                    <img src={github} />
                                </a>
                                <a>
                                    <img src={linkedIn} />
                                </a>
                                <a>
                                    <img src={codepen} />
                                </a>
                            </div>
                        </FlexContainer>
                        <FlexContainer size={1} direction='column' className="area">
                        </FlexContainer>
                    </FlexContainer>

                    <FlexContainer size={3} direction='column' className="detail">
                            <Player
                                playsInline
                                poster="/assets/poster.png"
                                src={door}
                                autoPlay
                                muted
                                onEnded={this.onVideoEnd}
                                className={videoHasStoppedVideo}
                                playsInline
                            />
                            <FlexContainer size={3} direction='column' className={`image-sec ${videoHasStoppedInfo}`} >
                                <h1> Ayabonga Qwabi</h1>
                                <img src={profiler}  />
                            </FlexContainer>
                            <FlexContainer size={1} direction='column' className={`info-sec  ${videoHasStoppedInfo}`}>
                                <h4>Who am I ?</h4>
                                <p>
                                I'm a fullstack software developer from Queenstown, South Africa. 
                                I primarily develop web applications in the financial business domain. 
                                In my spare time I enjoy tuning into philosophy podcasts because I find them quite enlightening.
                                </p>
                            </FlexContainer>
                            <FlexContainer size={1} direction='column' className={`info-sec  ${videoHasStoppedInfo}`}>
                                <p>I started developing web apps professionaly in 2016 and have grown exponentially eversince.
                                With regards to my education, Codex Academy has been 'da real MVP' in introducing me to Agile Development.
                                I enjoy front end work but from time to time I prefer the challenges of backend development.</p>
                                <h3> Companie I have collaborated with </h3>
                            </FlexContainer>
                            <FlexContainer size={1} direction='column' className={`info-sec  ${videoHasStoppedInfo} companies`}>
                                <img src={picsa} />
                                <img src={simply} />
                            </FlexContainer>

                    </FlexContainer>

                </FlexContainer>
            </div> 
        )
    }
}