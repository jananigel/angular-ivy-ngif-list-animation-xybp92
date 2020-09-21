import { Component, VERSION } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface List {
  id: string;
  name: string;
  children: List[];
}

const MOCK_DATA: List[] = [
  {
    id: '123456',
    name: 'list 1',
    children: [
      {
        id: '1111',
        name: 'child list 1',
        children: [],
      },
      {
        id: '2222',
        name: 'child list 2',
        children: [],
      },
    ],
  },
  {
    id: '1234567',
    name: 'list 2',
    children: [],
  },
  {
    id: '12345678',
    name: 'list 3',
    children: [],
  },
  {
    id: '123456789',
    name: 'list 3',
    children: [
      {
        id: '3333',
        name: 'list 3 child 1',
        children: [],
      }
    ]
  }
]

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('.3s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('.3s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  isShowList = true;
  buttonName = 'Show List';
  data = MOCK_DATA;

  onBtnClick = () => {
    this.isShowList = !this.isShowList;
    this.buttonName = this.isShowList ? 'Hide List' : 'Show List';
  }

  onListClick = (list: List) => {
    if (list.children && list.children.length) {
      // next page
      return;
    }

    console.log(`list ${list.name} had been clicked`);
  }
}
