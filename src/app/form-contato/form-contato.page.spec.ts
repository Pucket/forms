import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormContatoPage } from './form-contato.page';

describe('FormContatoPage', () => {
  let component: FormContatoPage;
  let fixture: ComponentFixture<FormContatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
