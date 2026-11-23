import { Component, signal } from '@angular/core';
import { Conference } from '../../Models/conference';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';
@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, FormsModule, Card],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  x=signal(2);
  searchTerm: string = '';
  favoriteConferences: Conference[] = [];

  confList:Conference[]=[{

   id: 1,
   titre: 'Angular Workshop',
   description: 'Découvrez les nouveautés d’Angular et développez vos compétences.',
   date: new Date('2026-10-15'),
   lieu: 'Tunis',
   prix: 50,
   imageUrl: '/images/conf.png',
   nbPlaces: 30,
   category:'Technologie',
   nbLikes: 10
  },

  {
   id: 2,
   titre: 'Music Festival 2026',
   description: 'Un festival musical avec plusieurs artistes et groupes.',
   date: new Date('2026-10-22'),
   lieu: 'Sousse',
   prix: 80,
   imageUrl: '/images/conf.png',
   nbPlaces: 1,
   category: 'Musique',
   nbLikes: 0
  },

  {
   id: 3,
   titre: 'AI & Innovation Conference',
   description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',
   date: new Date('2026-11-18'),
   lieu: 'Hammamet',
   prix: 100,
   imageUrl: '/images/conf.png',
   nbPlaces: 1,
   category: 'Technologie',
   nbLikes: 0
  },
  {
   id: 4,
   titre: 'Startup Meetup',
   description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
   date: new Date('2026-11-05'),
   lieu: 'Tunis',
   prix: 30,
   imageUrl: '/images/conf.png',
   nbPlaces: 0,
   category: 'Business',
   nbLikes: 0

  },

 ];
 addToFavorites(conf: Conference): void {
  if(this.favoriteConferences.includes(conf)){
    alert("conference already in favorites");
    return;
  }
  this.favoriteConferences.push(conf);
 }
 liker(conf: Conference): void {
  conf.nbLikes++;
 }
 filt(){
  return this.confList.filter(conf => conf.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) );
 }
}
