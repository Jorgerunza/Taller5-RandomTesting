describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()  
      cy.contains('Ingresar').click()

      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jd.runza@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("Pruebas2017MisoJR")
      cy.get('.cajaLogIn').contains('Ingresar').click()

    })
})

describe('Los estudiantes Registro', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("jorge")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("runza")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jd.runza@uniandes.edu.co")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
      cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select("Ingeniería de Sistemas")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("Pruebas2017MisoJR")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Error: Ya existe un usuario registrado con el correo')
      cy.contains('OK').click()
    })
})


describe('Los estudiantes busqueda y navegar a pagina de profesor', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()

      cy.get('.Select-input').find('input[role="combobox"]').click({force : true}).type("Rubby Casallas")
      cy.get('.Select-option').click()
      cy.get('.nombreProfesor').contains('Rubby Casallas Gutierrez')
     

    })
})

describe('Los estudiantes filtrar por materia', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()  
      cy.contains('Ingresar').click()

      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jd.runza@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("Pruebas2017MisoJR")
      cy.get('.cajaLogIn').contains('Ingresar').click()

      cy.get('.Select-input').find('input[role="combobox"]').click({force : true}).type("Rubby Casallas")
      cy.get('.Select-option').click()


      cy.get('.statsProfesorDropdownItemChecked').contains('Agregar materia al profesor').click()   
      cy.get('.modal-body').find('select[name="idMateria"]').select("Desarrollo De Sw En Equipo - ISIS2603")
      cy.get('.modal-body').contains('Agregar Materia al profesor').click()

    })
})





