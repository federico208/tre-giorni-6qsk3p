# tre-giorni-6qsk3p

Sito statico, una pagina. Tutto quello che va online sta in `public/`.

## Deploy

    npm i -g vercel
    cd tre-giorni-londra
    vercel link --yes --project tre-giorni-6qsk3p
    vercel --prod

`vercel.json` serve la cartella `public/` senza build e aggiunge
l'intestazione `X-Robots-Tag: noindex, nofollow, noarchive`.

## Provare un orario del weekend

Aggiungi `?t=2026-10-03T14:40` all'indirizzo (ora di Londra) per vedere
il segnaposto "sei qui" come apparirebbe in quel momento.

## Modificare i testi

Fermate, orari indicativi, "come ci arriviamo" e ricerche Maps stanno
nell'oggetto `LINEE` in `public/app.js`; le carte "Request stop" in `CARTE`.
