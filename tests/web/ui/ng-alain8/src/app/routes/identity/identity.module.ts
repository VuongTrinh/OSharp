import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity.routing';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserRoleComponent } from './user-role/user-role.component';


@NgModule({
  declarations: [UserComponent, RoleComponent, UserRoleComponent],
  imports: [
    CommonModule,
    IdentityRoutingModule
  ],
  entryComponents: [UserComponent]
})
export class IdentityModule { }
