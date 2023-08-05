import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   /*string interpolation*/
   ProjectName = "Angular ";
   title       = "Basics App"

   getCustomerName(){
    return "Robert.Jr";
   }

   /*Property data bidning*/
   customerRole = "Admin"
   inputType = "checkbox";
   isDisabled = true;


   captureData($eventDetails:KeyboardEvent){
      console.log($eventDetails.target);
      let element =  $eventDetails.target as HTMLInputElement;
      console.log(element.value);
   }

   /*Event Data binding*/
   evtClick(){
        console.log("Button Fired!!!!");
        window.alert(("Message is ").concat(this.ProjectName));
   }


   ProjectDetails = "";
   evtShowClick(){
       this.ProjectDetails  = this.ProjectName.concat(this.title)
   }



   /*Two Way Databinding*/
   cusPeterLocation = "London";

   evtCusLocationKeyUp($event:KeyboardEvent){
      /*Trying to update the Customer Location*/
      
      var inputEl =  $event.target as HTMLInputElement;
      this.cusPeterLocation = inputEl.value;
      
   }

   cusJohnLocation = "New yark"
   evtCusLocationModelChange($event:string){
       /*Trying to update the Customer Location By ngModel*/
       this.cusJohnLocation = $event
   }


   guestName = "Robert";
   guestLocation = "Colombo";







}
