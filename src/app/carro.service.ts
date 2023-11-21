import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Carros} from "./componentes/formulario/carro";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private API= 'http://localhost:8080/api/v1/carros/'
  constructor(private  http: HttpClient) {  }

  enviar(formulario: Carros):Observable<Carros>{
    return this.http.post<Carros>(this.API, formulario)
  }
}
