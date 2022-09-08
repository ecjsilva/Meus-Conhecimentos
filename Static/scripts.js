class ChamadaDoMetodoEstatico {
  static metodoEstatico() {
    return "O método estático foi chamado";
  }
  static outroMetodoEstatico() {
    return this.metodoEstatico() + " de outro método estático";
  }
}
ChamadaDoMetodoEstatico.metodoEstatico();
// 'O método estático foi chamado'

ChamadaDoMetodoEstatico.outroMetodoEstatico();
// 'O método estático foi chamado de outro método estático'

