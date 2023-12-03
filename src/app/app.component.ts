import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bicycle-map';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyCgJSg7uQYsTyhE2M_7rxcBZ9XZPIKrpRE"
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!, {
        center: { lat: 35.91320, lng: -79.05580 },
        zoom: 6
      })
    })
  }
}
