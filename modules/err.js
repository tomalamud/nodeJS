function seRompe() {
    return 2 + z;
};

function inspection() {
    try {
        seRompe();
    } catch(err) {
        console.log('Se rompió por el siguiente motivo:');
        console.group(' ');
        console.log(err.message);
        console.groupEnd(' ');
    }
}

inspection();

