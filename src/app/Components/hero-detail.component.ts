import { Component, Input } from '@angular/core';
import { Hero } from '../Commonds/Hero';

@Component({
    selector: 'hero-detail',
    templateUrl: '../Templates/hero-detail.component.html',
})

export class HeroDetailComponent{
    @Input() hero: Hero
}
