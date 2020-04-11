import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-album2',
  templateUrl: './album2.component.html',
  styleUrls: ['./album2.component.scss']
})
export class Album2Component implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;

  constructor() { }

  ngOnInit() {
  } 

  msaapPlaylist: Track[] = [
    {
      title: 'Victims of Circumstance',
      link: '../assets/album-2/Victims of Circumstance.mp3'
    },
    {
      title: "Don't Change Your Mind",
      link: "../assets/album-2/Don't Change Your Mind.mp3"
    },
    {
      title: 'On and On',
      link: '../assets/album-2/On and On.mp3'
    },
    // {
    //   title: 'Burn',
    //   link: 'Link to Audio Three URL'
    // },
    // {
    //   title: 'Soloist',
    //   link: 'Link to Audio Three URL'
    // },
    // {
    //   title: 'This is It',
    //   link: 'Link to Audio Three URL'
    // },
    // {
    //   title: 'Brightest Star in the Sky',
    //   link: 'Link to Audio Three URL'
    // },
    // {
    //   title: 'Wide Open Spaces',
    //   link: 'Link to Audio Three URL'
    // },
    // {
    //   title: 'Johnny',
    //   link: 'Link to Audio Three URL'
    // }
  ];

}
