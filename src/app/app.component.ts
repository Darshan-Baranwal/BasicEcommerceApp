import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CareForOld';
  Items = [];
  private myWindow;
  isModalOpen: boolean
  ngOnInit() {
    this.Items = [
      {
        dishName: 'BarbeQue',
        origin: 'Pan India',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'PaneerTikka',
        origin: 'Uttar Pradesh',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher', 'Buy Cold drink with free chips'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'Soya Chap',
        origin: 'Ghaziabad',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: '',
        origin: '',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'Dahi k Bhalle',
        origin: 'Gorakhpur',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'Chicken Tikka',
        origin: 'Chennai',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'Chicken RARA',
        origin: 'Jama Masjid',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
      {
        dishName: 'CHickek Korma',
        origin: 'Lucknow',
        starrating: 4,
        foodVoucher: 'Food Voucher',
        offersList: ['Buy a gift voucher'],
        imageSrc: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F661930%2Frestaurant020191212091542.jpg'
      },
    ];
    this.isModalOpen = false;
  }

  openItem() {
    var data = "<p>This is 'myWindow'</p>";
    this.myWindow = window.open("data:text/html," + encodeURIComponent(data),
      "_blank", "width=200,height=100");
    this.myWindow.focus();
  }
}
