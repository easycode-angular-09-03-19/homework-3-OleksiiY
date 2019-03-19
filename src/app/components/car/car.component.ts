import { Component, OnInit } from "@angular/core";
import { Car } from "../../interfaces/car";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent {
  public carSpec: Car = {
    name: "BMW",
    mileage: 1000,
    tank: 800,
    currentAmountFuel: 500,
    characteristic: [
      "engine - 2 litres",
      "max speed 200 km/h",
      "made in Germany",
      "4 dours",
      "black color"
    ]
  };

  public isEmptyTank: boolean = false;
  public refuelAmount = 800;
  public fixedDistanceDrive = 100;
  public showError: string;
  constructor() {}

  public drive(): void | Error {
    this.showError = "";
    if (this.fixedDistanceDrive <= this.carSpec.currentAmountFuel) {
      this.carSpec.mileage += this.fixedDistanceDrive;
      this.carSpec.currentAmountFuel -= this.fixedDistanceDrive;
      if (this.carSpec.currentAmountFuel <= 0) {
        this.isEmptyTank = true;
      }
    } else {
      this.showError = "Not enough fuel to drive this distance";
      throw new Error("Not enough fuel to drive this distance");
    }
  }
  public refuel(): void {
    this.carSpec.currentAmountFuel += this.refuelAmount;
    this.isEmptyTank = false;
    this.showError = "";
  }
}
