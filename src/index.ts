import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.send("<h1>Hi!</h1>")
})

app.listen(port, () => {})
