import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  desc: string;
  img: string;
  github: string;
  link: string;
}

/**
 * @title List with sections
 */
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  individual: Section[] = [
    {
      name: "Personal Website",
      desc: "Obviously, a good first introduction to some of my web development style should come from my personal website, which you're looking at right now! This website is built with Angular 8, and also uses both Bootstrap and Angular Material for design. The blog is built as well, using Firebase as a host for the posts and Google to authenticate the login (to post to the blog).",
      img: "./assets/personal-site.png",
      github: "https://github.com/beneisenberger/Personal-Site",
      link: ""
    },    {
      name: "Health Inspector Records",
      desc: "Another shameless nod and plug for myself, this Angluar application describes the small cassette label that I run out of Omaha. There is a page for the artists and descriptions, as well as their work displayed in order of release (with links to Apple Music, Spotify, etc) -- there is also an online store with add-to-cart and checkout functions.",
      img: "./assets/health-inspector-records.png",
      github: "https://github.com/beneisenberger/health-inspector-records",
      link: ""
    },    {
      name: "OMDB Search",
      desc: "A delightfully Easter-themed practice into retreiving data from APIs - this movie search Angular SPA allows the user to search the OMDB API for either a title, year, or type of movie query, and return the results displayed neatly via flex, and while updating in real time.",
      img: "./assets/omdb-search.png",
      github: "",
      link: ""
    },    {
    name: "Blackjack Game",
    desc: "What would learning web development be without a JavaScript-based classic game? This version of Blackjack has play/start, hit and hold buttons, as well as a special '11 or 1' option that will come up if you draw an ace.",
    img: "./assets/blackjack.png",
    github: "https://github.com/beneisenberger/Black-Jack",
    link: ""
  }
  ];

  group: Section[] = [
    {
      name: "budgetBuddy",
      desc: "For a complete full-stack project, my group created a financial budgeting application in Angular. The donut graph will fill to represent any income that you give it, and will be covered with expenses as you enter them. The expenses are color-coded by what type of expense the represent, and the individual/total figures are added together and stored in a SQL database pertaining to the user, who can also register and log in to the application.",
      img: "",
      github: "",
      link: ""
    },    {
      name: "Cosmic Music Search",
      desc: "A bit more of a sophisticated version of a music search, this application can also store a user's favorite songs into a favorites list or a playist - of which multiple can be created. This uses the Deezer API to make requests, and retreives song clips to function as the songs themselves. The user can also obviously register and log in, and everything is stored in local storage.",
      img: "./assets/cosmic-music-player.png",
      github: "https://github.com/beneisenberger/Music-Search-API",
      link: ""
    }
  ];

  ngOnInit() {
  }
}