import { Component, OnInit } from "@angular/core";
import { of, observable, Observable } from "rxjs";
import { map, filter, reduce, delay} from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "RxJs-training";
  source = ["1", "1", "foo", "2", "3", "5", "bar", "8", "13"];
  result;
  resultNumber;
  numberResult;
  numberResults = [];
  array: Observable<any[]>;
  sth;
  ngOnInit() {
    this.sourceCounter();
   this.generateNumbersTo(7);
  this.sumWithObservable()
  this.array.subscribe( result => {
    console.log(result, `wynik ${result}`)
    this.numberResults.push(result)
  })
  
  }


  sumWithObservable() {
    let observable = of(...this.source)
    this.result = observable
      .pipe(map(el => parseInt(el)))
      .pipe(filter(el => !isNaN(el)))
      .pipe(reduce((el, next) => el + next, 0))
      .pipe(delay(5000))
      
      return this.result.subscribe()
  }

  sourceCounter() {
    let result;
    result = this.source
      .map(el => parseInt(el, 10))
      .filter(el => !isNaN(el))
      .reduce((x, y) => {
        return x + y;
      }, );
    console.log(result, "res");
  }

  
  generateNumbersTo(number) {
    let numbersArray = []
    for (var i = 1; i <= number; i++) {
      numbersArray.push(i);
    }
    this.array = of(...numbersArray)
  }

}
