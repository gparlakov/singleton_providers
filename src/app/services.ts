import { NgModule, InjectionToken, Injectable } from '@angular/core';

@Injectable()
export class Shorthand {
  constructor() {
    console.log('Shorthand constructed');
  }
}
@Injectable()
export class Longhand {
  constructor() {
    console.log('Longhand constructed');
  }
}

export abstract class Constructed {
}
export function factory(): Constructed {
  console.log('Factory invoked');
  return {};
}


export const StringToken = new InjectionToken<string>('This will provide a string value');
