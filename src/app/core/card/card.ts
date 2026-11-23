import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Conference } from '../../Models/conference';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  conf=input.required()
}
