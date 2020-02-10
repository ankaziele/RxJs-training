import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "RxJs-training";
  source = ["1", "1", "foo", "2", "3", "5", "bar", "8", "13"];

  ngOnInit() {
    this.sourceCounter();
    this.generateNumbersTo(7);
  }

  sourceCounter() {
    let result;
    result = this.source
      .map(el => parseInt(el, 10))
      .filter(el => !isNaN(el))
      .reduce((x, y) => {
        return x + y;
      }, 0);
    console.log(result, "res");
  }

  generateNumbersTo(number) {
    let initialData = [];
    for (var i = 1; i <= number; i++) {
      initialData.push(i);
    }
    console.log(initialData);
  }
}
