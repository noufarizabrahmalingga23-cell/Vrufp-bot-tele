
const { Telegraf } = require("telegraf");
const express = require("express");

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN belum diatur di Railway.");
}

const bot = new Telegraf(token);
const app = express();

bot.start((ctx) => {
  ctx.reply(
    "Selamat datang di VRUFP Auto Order!\n\n" +
    "Bot berhasil terhubung.\n" +
    "Ketik /produk untuk melihat menu."
  );
});

bot.command("produk", (ctx) => {
  ctx.reply(
    "KATALOG VRUFP SHOP\n\n" +
    "1. NOKOS WhatsApp\n" +
    "2. Produk Digital\n" +
    "3. Jasa Joki\n\n" +
    "Sistem pemesanan dan pembayaran sedang disiapkan."
  );
});

app.get("/", (_req, res) => {
  res.send("VRUFP Auto Order aktif.");
});

async function main() {
  await bot.launch();

  app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log("Server aktif.");
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
