import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IphoneComponent } from './iphone/iphone.component';
import { GitPrfileComponent } from './git-prfile/git-prfile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IphoneComponent, GitPrfileComponent],
  imports: [CommonModule, FormsModule],
  exports: [GitPrfileComponent, IphoneComponent],
})
export class ViewModule {}
