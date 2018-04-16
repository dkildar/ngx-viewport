# NgxViewport

Detecting any HTMLElement in viewport at the time and handle it.

#Installation

To install this, run:
```npm install ngx-viewport```
https://www.npmjs.com/package/ngx-viewport

# Consuming module
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NgxInViewportModule } from 'ngx-viewport';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // In viewport module
    NgxInViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Usage

```xml
<some-element in-viewport (inViewportAction)="yourHandler()">
  ...
</some-element>
```
