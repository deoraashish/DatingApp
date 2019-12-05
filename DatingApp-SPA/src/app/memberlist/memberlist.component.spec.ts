/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemberlistComponent } from './memberlist.component';

describe('MemberlistComponent', () => {
  let component: MemberlistComponent;
  let fixture: ComponentFixture<MemberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
