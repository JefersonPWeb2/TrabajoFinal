import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    password: '',
    emailId:''
  }

  userLogin: any = {
    userName:'',
    password: '',
  }

  router =  inject(Router);

  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem("llave");
    if(isLocalData != null) {
      const localArray =  JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("llave",JSON.stringify(localArray))
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("llave",JSON.stringify(localArray))
    }
    alert("Registración exitosa");
  }

  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("llave");
    if(isLocalData != null) {
      const users = JSON.parse(isLocalData); 

      const isUserFound =  users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound != undefined) {
        this.router.navigateByUrl('dashboard')
      } else {
        alert("Usuario o contraseña errónea")
      }
    } else {
      alert("Usuario no encontrado")
    }
  }
}
