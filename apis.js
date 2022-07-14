// ----- Base De Site De Api's By LZ MODS ----- \\
// ----- Se For Postar Deixa Os Creditos ----- \\
// ----- https://youtube.com/lzmodsofc ----- \\
// ----- https://lzmods-api.xyz ----- \\
// ----- https://instagram.com/kn.mito_ ----- \\

// ----- Quando Bater 800 Inscritos Solto a V2 Com Varias Outras Api's ----- \\
// ----- Nao Custa Nada Ajudar :) ----- \\

let lz = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var canvacord = require('canvacord').Canvas
var fs = require('fs')
const {
  PlayLinkMP3,
  PlayLinkMP4,
  PlayAudio,
  PlayVideo,
  ytSearch
} = require("./database/youtube");

const criador = ['lzmods']; // Nome do criador
const key = 'lz' //apikey das apis
const keyinexistente = lz + '/paginas/keyerror.html' // html key de invalida

msgs = { //MSGS DE ERROR
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ deu erro no servidor interno'
    }
}

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function Kibar(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
function MathRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}

//[ - ///////// --- Api's Youtube --- ///////// - ]\\

router.get('/youtube/playmp3', async(req, res, next) => {
  apikey = req.query.apikey;
   q = req.query.q
  if(apikey !== key) return res.sendFile(keyinexistente)
  if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
  PlayAudio(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
 res.sendFile(error)})})
 
 router.get('/youtube/playmp4', async(req, res, next) => {
  apikey = req.query.apikey;
  q = req.query.q
  if(apikey !== key) return res.sendFile(keyinexistente)
  if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
  PlayVideo(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
 res.sendFile(error)})})

 router.get('/youtube/mp3', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
  if(apikey !== key) return res.sendFile(keyinexistente)
  if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
  PlayLinkMP3(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
 res.sendFile(error)})})

 router.get('/youtube/mp4', async(req, res, next) => {
   apikey = req.query.apikey;
   link = req.query.link
  if(apikey !== key) return res.sendFile(keyinexistente)
  if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
  PlayLinkMP4(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
 res.sendFile(error)})})

 //[ - ///////// --- Api's Canvas --- ///////// - ]\\

 router.get('/canvas/lgbt', async(req, res, next) => {
  apikey = req.query.apikey;
  img = req.query.img
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!img) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: IMG"})
 res.json({
  status: true,
  código: 999,
  criador: `${criador}`,
  resultado: {
    img: `https://lzmods-api.xyz/api/canvas/gay?img=${img}&apikey=lz`
  }
  })
})

router.get('/canvas/jail', async(req, res, next) => {
  apikey = req.query.apikey;
  img = req.query.img
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!img) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: IMG"})
 res.json({
  status: true,
  código: 999,
  criador: `${criador}`,
  resultado: {
    img: `https://lzmods-api.xyz/api/canvas/jail?img=${img}&apikey=lz`
  }
  })
})

router.get('/canvas/stonks', async(req, res, next) => {
  apikey = req.query.apikey;
  img = req.query.img
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!img) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: IMG"})
 res.json({
  status: true,
  código: 999,
  criador: `${criador}`,
  resultado: {
    img: `https://lzmods-api.xyz/api/canvas/stonk?img=${img}&apikey=lz`
  }
  })
})

router.get('/canvas/rip', async(req, res, next) => {
  apikey = req.query.apikey;
  img = req.query.img
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!img) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: IMG"})
 res.json({
  status: true,
  código: 999,
  criador: `${criador}`,
  resultado: {
    img: `https://lzmods-api.xyz/api/canvas/rip?img=${img}&apikey=lz`
  }
  })
})

router.get('/canvas/beautiful', async(req, res, next) => {
  apikey = req.query.apikey;
  img = req.query.img
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!img) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: IMG"})
 res.json({
  status: true,
  código: 999,
  criador: `${criador}`,
  resultado: {
    img: `https://lzmods-api.xyz/api/canvas/beautiful?img=${img}&apikey=lz`
  }
  })
})

 //[ - ///////// --- Api's NSFW --- ///////// - ]\\

 router.all('/nsfw/miakhalifa', async (req, res) => {
   apikey = req.query.apikey;
  if(apikey !== key) return res.sendFile(keyinexistente)
  json = JSON.parse(fs.readFileSync('database/nsfwmia.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.type('png')
  res.send(await getBuffer(random))
  })

  router.all('/nsfw/elisa-sanches', async (req, res) => {
    apikey = req.query.apikey;
  if(apikey !== key) return res.sendFile(keyinexistente)
    json = JSON.parse(fs.readFileSync('database/nsfwelisa.json').toString())
    random = json[Math.floor(Math.random() * json.length)]
    res.type('png')
    res.send(await getBuffer(random))
    })

    router.all('/nsfw/loli-masturbation', async (req, res) => {
      apikey = req.query.apikey;
    if(apikey !== key) return res.sendFile(keyinexistente)
      json = JSON.parse(fs.readFileSync('database/masturbation.json').toString())
      random = json[Math.floor(Math.random() * json.length)]
      res.type('png')
      res.send(await getBuffer(random))
      })

      router.all('/nsfw/loli-pussy', async (req, res) => {
        apikey = req.query.apikey;
      if(apikey !== key) return res.sendFile(keyinexistente)
        json = JSON.parse(fs.readFileSync('database/pussy.json').toString())
        random = json[Math.floor(Math.random() * json.length)]
        res.type('png')
        res.send(await getBuffer(random))
        })

        router.all('/nsfw/loli-gif', async (req, res) => {
          apikey = req.query.apikey;
        if(apikey !== key) return res.sendFile(keyinexistente)
          json = JSON.parse(fs.readFileSync('database/hnt_gifs.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('gif')
          res.send(await getBuffer(random))
          })

        router.all('/nsfw/loli-yuri', async (req, res) => {
          apikey = req.query.apikey;
        if(apikey !== key) return res.sendFile(keyinexistente)
          json = JSON.parse(fs.readFileSync('database/yuri.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('png')
          res.send(await getBuffer(random))
          })

router.all('/loli', async (req, res) => {
  apikey = req.query.apikey;
        if(apikey !== key) return res.sendFile(keyinexistente)
  json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
  random = json[Math.floor(Math.random() * json.length)]
  res.type('png')
  res.send(await getBuffer(random))
  })

router.post('/post/body', async (req, res) => {
  res.send(req.body)
})
   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'página não encontrada Ou e Inexiste',
            endpoint: req.path
        })
})
  

module.exports = router
