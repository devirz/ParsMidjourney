import { Bot } from "grammy"
import dotenv from "dotenv"
import { txt2img, isSuccessful } from "./src/txt2img.js"
import Dalle from './src/dalle3.js'

dotenv.config()
const bot = new Bot(process.env.TOKEN)

bot.command("start", async ctx => {
    const name = ctx.from.first_name || "کاربر"
    await ctx.reply(`سلام ${name} عزیز!\nبرای استفاده از ربات از این دستور استفاده کن:\n\`/img <ptompt>\``, {
        parse_mode: "Markdown"
    })
})

bot.hears(/\/img (.*)/, async ctx => {
    let prompt = ctx.match[1]
    console.log(prompt)
    const img = await Dalle(prompt)
    console.log(img)
    await ctx.reply(`در حال ساخت تصویر با این مشخصات:\n\n\`${prompt}\``, {
        parse_mode: "Markdown"
    })
    console.log("prompt is proccessing...\n", img)
})

bot.hears(/\/check (.*)/, async ctx => {
    let job = ctx.match[1]
    const response = await isSuccessful(job)
    const status = response === "queued" ? "در حال پردازش..." : "به اتمام رسیده"
    await ctx.reply(`وضعیت درخواست شما: ${status}`)
})

bot.start()