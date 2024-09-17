import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [], // No declarations
  imports: [CommonModule, SidebarComponent], // Import SidebarComponent
  exports: [SidebarComponent] // Export SidebarComponent only
})
export class CoreModule {}
