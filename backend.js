import express from 'express'                     

const app = express()                          

app.use(express.json())                            // Permite recibir JSON en body de peticiones
app.use(express.urlencoded({ extended: true }))   // Permite recibir datos codificados en URL (formularios)

app.listen(8080, () => console.log("Escuchando en el puerto 8080")) 

let mails = []

app.post ('/',(req,res) => {
let data = req.body

if(!data.user_mail){
  console.log("Error: No se recibió el campo 'user_mail' en el body.");
return res.status (400).send ({status: "error", error:"incomplete values"})
}


mails.push (data)
console.log("Email Recibido", data.user_mail )
res.send ({status: "success", message: "Mail recibido correctamente "})
});