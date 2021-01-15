import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private itemsInCart: any[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: any) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: any) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.name !== item.name);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<any[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: any[]) => {
      return items.reduce((prev, curr: any) => {
        return prev + curr?.cost;
      }, 0);
    })
  );
  }

  public clearCart() {
    this.itemsInCartSubject.next([]);
  }
}
