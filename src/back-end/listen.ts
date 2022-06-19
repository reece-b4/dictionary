import app from '../app';

const PORT = 9090;

// err type object?
app.listen(PORT, (err?) => {
    // tslint:disable-next-line:no-console
    if (err) console.log(err);
    // tslint:disable-next-line:no-console
    else console.log('Server listening on port: 9090')
});