import { Component } from '@angular/core';

@Component({
  selector: 'mf-backoffice-entry',
  template: `<div class="remote-entry">
    <h2>backoffice's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #14552b;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
