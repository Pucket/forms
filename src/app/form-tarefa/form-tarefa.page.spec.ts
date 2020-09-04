import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormTarefaPage } from './form-tarefa.page';

describe('FormTarefaPage', () => {
  let component: FormTarefaPage;
  let fixture: ComponentFixture<FormTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
