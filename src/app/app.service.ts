import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private itemsInCart: any[] = [];

  private favoriteSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private favorites : any[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    this.favoriteSubject.subscribe(_ => this.favorites = _);
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
        return prev + curr?.price;
      }, 0);
    })
  );
  }

  public clearCart() {
    this.itemsInCartSubject.next([]);
  }


  // 
  public getFavorites() :Observable<any[]>{
    return this.favoriteSubject.asObservable();
  }

  public addToFavorites(item: any) {
    this.favoriteSubject.next([...this.favorites, item]);
  }

  public removeFromFavorites(item: any) {
    const currentItems = [...this.favorites];
    const itemsWithoutRemoved = currentItems.filter(_ => _.name !== item.name);
    this.favoriteSubject.next(itemsWithoutRemoved);
  }

  
}
