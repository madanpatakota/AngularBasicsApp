import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-comp',
  template: `
              <form [formGroup]="userForm" (ngSubmit)="evtSubmit()">
                  <div> 
                        <input type="text" id="username-input" [formControlName]="'userName'" >
                        <input type="text" id="userpassword-input" [formControlName]="'password'">
                        <button type="submit" [disabled]="userForm.invalid" >Click</button>
                    </div>  
              </form>`,
})
export class TestCompComponent implements OnInit { 

  userForm: FormGroup | any ;
  @Output() eventEmitter = new EventEmitter<any>();
  
   ngOnInit(): void {
    this.userForm = new FormGroup({
          'userName': new FormControl(null, Validators.required),
          'password': new FormControl(null, Validators.required),
        })
   }

    evtSubmit(){
           let userDetails ={ username : this.userForm.get('userName').value , password : this.userForm.get('password').value}
           this.eventEmitter.emit(userDetails);
    }


}
