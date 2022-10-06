import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {'(document:click)': 'onClick($event)'}
})
export class SelectComponent {

  @Input() options?: any[];
  @Output() currentValueChanged = new EventEmitter<string>();

  public open: boolean = false;
  public currentValue: string = '';

  constructor(private _elementRef: ElementRef) { }

  onClick(event: any) {
  if (!this._elementRef.nativeElement.contains(event.target))
    this.removeClass();
  }

  select(value: string) {
    this.currentValueChanged.emit(this.currentValue = value);
    this.toggleClass();
  }

  toggleClass(){
    this.open = !this.open;
  }

  removeClass(){
    this.open = false;
  }

  clear() {
    this.currentValueChanged.emit(this.currentValue = '');
    this.toggleClass();
  }

}
