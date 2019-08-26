describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
	  //creacion de una cuenta que ya existe
	  cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Steven")
	  cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Erira")
	  cy.get('.cajaSignUp').find('input[name="correo"]').click().type("stevenerira87@gmail.com")
	  cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("universidad-de-los-andes")
	  cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("12")
	  cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
	  cy.get('.cajaSignUp').find('input[name="acepta"]').click()
	  cy.get('.cajaSignUp').contains('Registrarse').click()
	  cy.contains('Ocurrió un error activando tu cuenta')
	  cy.contains('Ok').click()
	  //Login de usuario
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("stevenerira87@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
	  //Busqueda e ingreso a la pagina de un profesor
	  cy.contains('Busca un profesor o materia...').click()
      cy.get('.Select-input').find('input[role="combobox"]').type("Mario Linares").click()
	  cy.contains('Mario Linares Vasquez').click()
	  //prueba funcionalidad de filtros por materia
	  cy.get('form[class="jsx-2708486314 boxElement"]').find('input[name="id:MISO4208"]').click()
	  cy.get('form[class="jsx-2708486314 boxElement"]').find('input[name="id:MISO4208"]').click()
	  cy.get('form[class="jsx-2708486314 boxElement"]').find('input[name="id:ISIS1206L"]').click()
	  cy.get('form[class="jsx-2708486314 boxElement"]').find('input[name="id:ISIS1206L"]').click()
	  cy.get('button[id="cuenta"]').click()
	  cy.contains('Salir').click()
    })
})