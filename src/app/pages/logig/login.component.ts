import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";

@Component({
    selector: 'app-logig',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [DefaultLoginLayoutComponent]
})
export class LoginComponent {

}
