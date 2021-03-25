import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public someValue: number = 10;
  public arrayRange: number[] = [0, 5, 10,20,30,40,50,60,70,80,90,99, 100];
  //private arrayRange: number[] = [0, 10000, 20000, 30000, 40000, 50000];
  public range: object = this.genRange(this.arrayRange);
  
  private dollar: any = {
    // 'to' the formatted value. Receives a number.
    to: function (value) {
      return "$" + value.toFixed(2);
    },
    // 'from' the formatted value.
    // Receives a string, should return a number.
    from: function (value) {
      return Number(value.replace('$', ''));
    }
  };

  public someConfig: any = {
    connect: "lower",
    snap: true,
    range: this.range,
    start: 10,
    tooltips: [this.dollar],
    //behaviour: 'tap',
    pips: {
      mode: 'values',
      values: [0, 100],
      //filter: this.filterPips,
      density: -1,
      format: this.dollar
    }
  };
  title = 'The Playground';

  public locked:boolean = false;
  lastValue:number = this.someValue;
  onChange(value: any) {
    if(this.locked){
      this.someValue = this.lastValue;
    } else {
      this.someValue = value;
      this.lastValue = value;
    }    
  }

  private threshold: number = 1;
  filterPips(value, type) {
    //var orderedList = this.someConfig.pips.values;
    console.log(arguments);
    return 1;
  }

  boopClick() {
    this.locked = !this.locked;
    var box = document.getElementById("boopbox");
    box.setAttribute("class", "box");
    setTimeout(function () {
      box.setAttribute("class", "box orange-glow");
    }, 5);
  }

  genRange(values: number[]) {
    var output: any = {};
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    output["min"] = min;
    output["max"] = max;

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      if (value == min || value == max)
        continue;

      var percent = (value / max) * 100;
      output[percent] = value;
    }
    return output;
  }

}
