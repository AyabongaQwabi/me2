
import React, {Component} from 'react';
import './style.scss';
import MusicPlayer from 'react-responsive-music-player'
import * as R from 'ramda';

export default class box extends Component{
    render(){
        const { src, isFlexible, albumArt, title, artist } = this.props;
        const boxClass = isFlexible ? 'songbox flexy' : 'songbox';
        const playlist = [
            {
              url: src,
              cover: albumArt,
              title,
              artist: R.is(Array, artist) ? artist : [artist],
            }]
        return(
            <div className={boxClass} >
                <div className='art-container'>
                    <img className='album-art' src={albumArt}/>
                </div>
                <MusicPlayer playlist={playlist} />
            </div> 
        )
    }
}