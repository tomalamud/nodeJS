/* Una vez ejecutado el exit, estamos fuera del event loop 
   Es, literalmente, lo último que sucederá en el programa */
process.on('exit', () => {
    console.log('El proceso terminó.');
    /* Por eso el setTimeout no funcionará */
    setTimeout(() => console.log('Esto no se verá por que está en otro hilo y el principal está muriendo'), 1);
});

process.on('beforeExit', () => {
    console.log('El proceso terminará.');
});


/* Podría hasta mandarme un mail si hay un error en mi programa */
process.on('uncaughtException', (err, origen) => {
    console.group('--Debuging--')
    console.error('Vaya, se nos ha olvidado capturar un error');
    console.error(err.message);
    console.groupEnd('--Debuging--')
});
/* Esta función es la que se está debugeando */
funcionQueNoExiste()
