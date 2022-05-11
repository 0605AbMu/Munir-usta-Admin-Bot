/**
 * Bu telegram bot Munir Usta uchun yasaldi
 * Munir usta telegram contact: https://t.me/Munir_Admin;
 * Vazifasi: 
 * 1. Guruh a'zolarini control qilib turish; 
 * 2. Guruhga yuboriluvchi xabarlar sonini cheklash;
 * 3. Guruhda yoza olish uchun Yangi a'zo va kanalga qo'shilishni ta'minlash;
 * Muallif: Abdumannon Shamsiyev - telegram contact https://t.me/Abdumannon_Shamsiyev;
 */






const app = (require("express"))();

app.get("/", (req, res) => {
    res.send("<h1>There is Munir Usta Admin bot server. Call to <a href='https://t.me/Munir_admin'>Munir Admin</a></h1>");
})

app.get("/stat/:id", (req, res) => {
    try {


        res.download("./data/" + req.params.id + "-data.json", (err) => {
            res.send("<h3>" + req.params.id + " file not found.<h1> Error 404.</h1></h3>")
        });



    }
    catch (e) {
        res.send("<h3>Data files not found.<h1> Error 404.</h1></h3>")
    }

})


app.listen(process.env.PORT || 4000, () => {
    require("./scripts/home");
    console.log("Bot Ishga Tushdi....");
})
