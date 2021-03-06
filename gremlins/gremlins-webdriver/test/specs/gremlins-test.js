function loadScript(callback) {
	var s = document.createElement('script');
	s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
	if(s.addEventListener) { 
		s.addEventListener('load',callback,false);
	} else if(s.readyState) {
		s.onreadystatechange = callback
	}
	document.body.appendChild(s);
}

function unleashGremlins(ttl, callback) {
    function stop() {
        horde.stop();
        callback();
    }
    var horde = window.gremlins.createHorde()
  .gremlin(gremlins.species.formFiller())
  .gremlin(gremlins.species.clicker().clickTypes(['click']))
  .gremlin(gremlins.species.toucher())
  .gremlin(gremlins.species.scroller())
  .gremlin(function() {
    window.$ = function() {};
  });
    horde.seed(1234);

    horde.after(callback);
    window.onbeforeunload = stop;
    setTimeout(stop, ttl);
    horde.unleash();
}

describe('Monkey testing with gremlins ', function () {
  
  it('it should not raise any error', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
    
    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(loadScript);
   
    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(unleashGremlins, 50000);
  });

  afterAll(function() {
	 browser.log('browser').value.forEach(function(log) { 
		 browser.logger.info(log.message.split(' ')[2]);
	 ;});
  });

});
