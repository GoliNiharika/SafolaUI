import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'safola';
  data = [
    {name: '100% wholegrain oats',src:'../assets/wheat.JPG'},
    {name: 'Real Vegetables',src:'../assets/veggies.JPG'},
    {name: 'No added preservatives',src:'../assets/preservatives.JPG'},
    {name: 'keeps you fuller for longer',src:'../assets/fiber.JPG'},
    {name: 'Upto 70% less Fat**',src:'../assets/lessFat.JPG'},
    {name: 'Ready in 3 min',src:'../assets/3min.JPG'}
  ];

  steps =[
    {desc: 'For every cup of Safola Oats, add 1 1/2 cups of water in a pan', src:'../assets/step1.JPG'},
    {desc: 'Cook on Medium flame for 3 min or microwave for 3 min on full power. Stir occasionally', src:'../assets/step2.JPG'},
    {desc: 'Serve hot to enjoy the distinct flavors. Garnish with veggies, herbs and choice of toppings.', src:'../assets/step3.JPG'},
  ];

  h = [
    {img:'../assets/slide2sub1.JPG',desc: 'Classic Oats'},
    {img:'../assets/slide2sub2.JPG',desc: 'Masala Oats'},
    {img:'../assets/slide2sub3.JPG',desc: 'Classic Oats'},
    {img:'../assets/slide2sub4.JPG',desc: 'Classic Oats'},
    {img:'../assets/slide2sub1.JPG',desc: 'Classic Oats'},
  ];
}
