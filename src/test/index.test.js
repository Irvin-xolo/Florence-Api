const RegistrarNuevoPaciente = require('../utils/paciente/index');

describe('RegistrarNuevoPaciente', () => {
  it('debería registrar un nuevo paciente correctamente', async () => {
    //Objeto de Prueba
    const paciente = {
      NombreCompleto: 'Alan Ramos',
      FechaNacimiento: '1990-05-15',
      NumSeguroSoc: '12345678',
      Telefono: '5551234567',
      Email: 'juan@example.com',
      ContactoEmergenciaNombre: 'Luis Jimenez',
      ContactoEmergenciaTelefono: '5559876543',
      Alergias: 'Ninguna',
      Diabetes:  'No',
      Discapacidad: 'Ninguna'
    };

    const resultado = await RegistrarNuevoPaciente(paciente);

    expect(resultado).toHaveProperty('rows');
    expect(resultado).toHaveProperty('fields');

  });
});
