const express = requiere('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('
             <!DOCTYPE html>
             <html>
             <head>
                <tittle> Mi Primer PaaS</title>
                <style>
                  body { font-family: Arial, sans-serif; text-align:
                        center; margin-top: 50px; background-color: #f0f8ff
                          ; }
            h1 { color: #0056b3; }
  .contendor { background: white; paddin: 30px; border
              -radius: 10px; display: inline-block; box-shadow: 0px 4px 15px rgba (0,0,0,0.1); }
</style>
  </head>
<body>
  <div class="contenedor">
  <h1>!hola nube! este es mi primer PaaS </h1>
<p>si ves esto, tu despliegue en <strong>render</strong> fue un existo rotundo.</p>
  <p>!felicidades futuro experto en cloud cmputing!</p>
  </div>
  </body>
  </html>
');
});

app.listen(port, () => {
  console.log('servidor inciado y escuchando...');
});
