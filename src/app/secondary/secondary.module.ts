import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AComponent }    from './a/a.component';
import { BComponent }  from './b/b.component';
import { SecondaryRoutingModule } from './secondary-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondaryRoutingModule
  ],
  declarations: [
    AComponent,
    BComponent
  ],
  providers: []
})
export class SecondaryModule {}