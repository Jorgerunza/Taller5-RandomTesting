describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.Dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}

function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var revent = getRandomInt(0, 3);
    if (revent == 0){
	    if(monkeysLeft > 0) {
		cy.get('a').then($links => {
		    var randomLink = $links.get(getRandomInt(0, $links.length));
		    if(!Cypress.Dom.isHidden(randomLink)) {
		        cy.wrap(randomLink).click({force: true});
		        monkeysLeft = monkeysLeft - 1;
		    }
		    setTimeout(randomEvent, 1000, monkeysLeft);
		});
	    }
    }else if (revent == 1){
	    if(monkeysLeft > 0) {
		cy.get('input').then($links => {
		    var randomLink = $links.get(getRandomInt(0, $links.length));
		    if(!Cypress.Dom.isHidden(randomLink)) {
		        cy.wrap(randomLink).click({force: true}).type("test");
		        monkeysLeft = monkeysLeft - 1;
		    }
		    setTimeout(randomEvent, 1000, monkeysLeft);
		});
	    }
    }else if (revent == 2){
	    if(monkeysLeft > 0) {
		cy.get('select').then($links => {
		    var randomLink = $links.get(getRandomInt(0, $links.length));
		    if(!Cypress.Dom.isHidden(randomLink)) {
		        cy.wrap(randomLink).select("test");
		        monkeysLeft = monkeysLeft - 1;
		    }
		    setTimeout(randomEvent, 1000, monkeysLeft);
		});
	    }
    }else {
	    if(monkeysLeft > 0) {
		cy.get('button').then($links => {
		    var randomLink = $links.get(getRandomInt(0, $links.length));
		    if(!Cypress.Dom.isHidden(randomLink)) {
		        cy.wrap(randomLink).click({force: true});
		        monkeysLeft = monkeysLeft - 1;
		    }
		    setTimeout(randomEvent, 1000, monkeysLeft);
		});
	    }
    }      
}



