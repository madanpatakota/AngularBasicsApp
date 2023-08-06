import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ContentChild,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  /*

    Monitor by god
    Monitor by developer

     Human Born Stage(Page Load)(OnInit)
     Human Organs Development Stage (ngOnChanges) - Organs First Stage ()
     Human Organs Development Stage (ngViewInit) - Teeth (View Childs Load)
     ngContentInit ( Content related Elements Handling)
     ngDestroy(Page Unload)(Trying to navigate from one component to another component)

     ngAfterViewInit()  -- Monitor every movement of the element designed by viewchild
     ngAfterContentInit()-- Monitor every movement of the element designed by ContentChild
     

  */

  /*ElementRef

      ElementRef is Angular class type which refers to the any element from HTML DOM within the compenents template. 

      Byusing the NativeElement from ElementRef
      We can Capture the Element Structure.
    
    */
  /* ViewChild */

  @ViewChild('CustomerName') vCustomerName: ElementRef<any>;

  displayName = '';
  btnClick() {
    console.log(this.vCustomerName);
    this.displayName = this.vCustomerName.nativeElement.value;
  }

  /*ContentChild*/
  displayLocation = '';
  @ContentChild('CustomerLocation') vCustomerLocation: ElementRef<any>;
  evtGetLocationDetails() {
    console.log(this.vCustomerLocation);
    this.displayLocation = this.vCustomerLocation.nativeElement.value;
  }

  /*differecen between Div and ngContainer*/
  numbers = [1, 2, 3, 4];

  /*templateRef*/
  displayCustomerTemplate: TemplateRef<any>;
  @ViewChild('CustomerTemplate') CustomerTemplateRef: TemplateRef<any>;
  btnGetCustomerTemplate() {
    let customerTemplateRef = this.CustomerTemplateRef;
    this.displayCustomerTemplate = customerTemplateRef;
    console.log(this.displayCustomerTemplate);
  }

  /*Dynamimc Binding*/
  CustomerPurchaseAmount = '10000$';
  @ViewChild('CustomerMessageContainer', { read: ViewContainerRef })
  vCustomerContainerRef: ViewContainerRef;
  @ViewChild('CusotomerMessageTemplate', { read: TemplateRef })
  cusotomerMessageTemplateRef: TemplateRef<any>;
  btnGenerateTemplate() {
    /*ViewContainerRef*/
    this.vCustomerContainerRef.insert(
      this.cusotomerMessageTemplateRef.createEmbeddedView(null)
    );
  }


 
  @ViewChild('CustomerFamilyDetailsContainer', { read: ViewContainerRef })
  vCustomerFamilyDetailsContainerRef: ViewContainerRef;
  @ViewChild('CusotomerSpouseNameTemplate', { read: TemplateRef })
  vCusotomerSpouseNameTemplateRef: TemplateRef<any>;
  btnGenerateTemplateWithData() {
    /*ViewContainerRef*/
    this.vCustomerFamilyDetailsContainerRef.insert(
      this.vCusotomerSpouseNameTemplateRef.createEmbeddedView({'sName' : 'Mery'})
    );
  }
}
