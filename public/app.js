(function () {
  'use strict';

  /* ---------- Icone SVG (tratto, colore ereditato) ---------- */
  var ICONE = {
    tazza: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8.5 3.5c0 1.4 1 1.4 1 2.8M12.5 3.5c0 1.4 1 1.4 1 2.8"/><path d="M4 21.5h14"/>',
    pellicano: '<circle cx="14" cy="5.5" r="2"/><path d="M16 5l6.5 2.4H16"/><path d="M16 7.4c1.6 2.6 4.4 2.6 6.2.2"/><path d="M12.6 7.2c-.9 1.6-.8 3.2.2 4.4"/><path d="M2.5 15c1.2-3 4.6-4 8.5-4 3.4 0 4.6 1.6 4 4-.6 2.6-3.4 4-7 4-3 0-5.4-1.4-5.5-4z"/><path d="M6 15.5c2-1.2 4.5-1.4 6.5-.5"/><path d="M8.5 19v3M11 18.6v3.4"/><circle cx="14.4" cy="5.2" r=".3" fill="currentColor"/>',
    ponte: '<path d="M1.5 17.5h21"/><path d="M6 17.5V5.5M18 17.5V5.5"/><path d="M1.5 12c2.5-1.5 3.6-3.8 4.5-6.5 1.6 4.6 3.6 7 6 7s4.4-2.4 6-7c.9 2.7 2 5 4.5 6.5"/><path d="M9 10.6v6.9M12 12.5v5M15 10.6v6.9"/><path d="M1.5 20.5c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/>',
    faro: '<path d="M8.8 21l1.6-12h3.2l1.6 12z"/><path d="M9.8 9h4.4V6.2L12 4.2 9.8 6.2z"/><path d="M12 4.2V2.6"/><path d="M9.8 14.2h4.4M9.3 17.8h5.4"/><path d="M3 21h18"/><path d="M3.5 5.5l4 1.4M20.5 5.5l-4 1.4"/>',
    fiori: '<circle cx="7" cy="8" r="1.4"/><path d="M7 4.6a1.8 1.8 0 0 1 0 3.4 1.8 1.8 0 0 1 0-3.4zM7 11.4a1.8 1.8 0 0 1 0-3.4 1.8 1.8 0 0 1 0 3.4zM3.6 8a1.8 1.8 0 0 1 3.4 0 1.8 1.8 0 0 1-3.4 0zM10.4 8a1.8 1.8 0 0 1-3.4 0 1.8 1.8 0 0 1 3.4 0z"/><circle cx="16.5" cy="6" r="2.4"/><circle cx="16.5" cy="6" r=".6" fill="currentColor"/><path d="M7 9.8V20M16.5 8.4V20"/><path d="M7 15c-1.8 0-3-1-3.2-2.4M16.5 13.5c1.8 0 3-1 3.2-2.4"/><path d="M3 20.5h18"/>',
    battello: '<path d="M2 14.5h20l-2.6 4.2H4.4z"/><path d="M4.5 14.5V11h12.5l2 3.5"/><path d="M8 11V8h6.5v3"/><path d="M7 12.8h1M10 12.8h1M13 12.8h1"/><path d="M1.5 21.5c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/>',
    lampada: '<path d="M3 2.5v7"/><path d="M3 4h10.5"/><path d="M5.5 4 3 6.5"/><path d="M13.5 4v2.5"/><path d="M10.5 6.5h6l-1 2h-4z"/><path d="M11.3 8.5h4.4V16h-4.4z"/><path d="M10.8 16h5.4l-1 2h-3.4z"/><path d="M13.5 10.5v3.5"/><path d="M19 10.5l1.8-.8M19.2 13.5h2M19 16.5l1.8.8" opacity=".6"/>',
    soffitto: '<rect x="2.5" y="4" width="19" height="16" rx="1.5"/><rect x="5.5" y="7" width="13" height="10" rx="1"/><ellipse cx="12" cy="12" rx="4.2" ry="3"/><path d="M9.8 12.8c.8-.9 1.6-.9 2.4 0s1.3.7 1.9.1"/><circle cx="12.6" cy="10.9" r=".6" fill="currentColor"/><path d="M2.5 4l3 3M21.5 4l-3 3M2.5 20l3-3M21.5 20l-3-3"/>',
    meteo: '<circle cx="8.5" cy="8.5" r="3.2"/><path d="M8.5 2.2v1.4M2.2 8.5h1.4M4 4l1 1M13 4l-1 1M4 13l1-1"/><path d="M9 19.5h9.2a3.3 3.3 0 0 0 .2-6.6 4.6 4.6 0 0 0-8.8-.4A3.5 3.5 0 0 0 9 19.5z"/>'
  };

  function svg(nome, cls) {
    return '<svg class="' + (cls || 'ico') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONE[nome] + '</svg>';
  }

  /* ---------- Dati ---------- */
  // ora: orario indicativo "HH:MM"; come: come ci arriviamo; maps: testo per la ricerca Google Maps
  var LINEE = [
    {
      id: 'venerdi', data: '2026-10-02', nome: 'Venerdì 2 ottobre', colore: 'var(--ven)',
      meteo: 'Sole e nuvole · 21° di giorno, 19° quando atterri',
      fermate: [
        { nome: 'London City', testo: 'Ehi ehi! Welcome to London.', ora: '18:50', come: 'In aereo, fino a London City.', maps: 'London City Airport' },
        { nome: 'Poplar', testo: 'Da Poplar a casa sono otto, dieci minuti.', ora: '19:20', come: 'DLR da London City fino a Poplar, 12 minuti.', maps: 'Poplar DLR station, London' },
        { nome: 'Cena insieme', testo: 'E dopo due passi sulla banchina illuminata.', ora: '20:30', maps: 'Canary Wharf, London' }
      ]
    },
    {
      id: 'sabato', data: '2026-10-03', nome: 'Sabato 3 ottobre', colore: 'var(--sab)',
      meteo: 'Foschia al mattino, poi sole e nuvole · da 14° a 21°',
      fermate: [
        { nome: 'Colazione a casa', testo: '', ora: '09:00', come: 'Siamo a casa.', maps: 'Canary Wharf, London', icona: 'tazza' },
        { nome: 'Bond Street', testo: 'Da Canary Wharf dritti in centro, senza cambi.', ora: '09:50', come: 'Elizabeth line da Canary Wharf a Bond Street, 15 minuti, uscita Davies Street. Da casa circa mezz\'ora in tutto.', maps: 'Bond Street station Davies Street entrance, London' },
        { nome: 'La svendita', testo: 'Ticket alla mano e si comincia. Primo piano, aperta dalle 10 alle 17.', ora: '10:15', come: 'A piedi, è davanti all\'uscita.', maps: '58 Davies Street, London W1K 5JF' },
        { nome: 'Il bivio', testo: 'Scegli tu da che parte andiamo.', ora: '12:15', rami: [
          { id: 'st-james', etichetta: 'Ramo 1', nome: 'St James\'s Park', testo: 'Ci torniamo, stavolta con calma.', come: 'A piedi da Davies Street attraverso Green Park, circa mezz\'ora.', maps: 'St James\'s Park, London', icona: 'pellicano' },
          { id: 'mayfair', etichetta: 'Ramo 2', nome: 'Mount Street Gardens e Shepherd Market', testo: 'Un giardino nascosto tra due chiese storiche, con i platani e le panchine. Poi Shepherd Market, il pezzo di Mayfair che sembra un villaggio, nato dove si teneva la fiera che ha dato il nome al quartiere.', come: 'A piedi, 10 minuti da Davies Street al giardino e altri 10 fino a Shepherd Market.', maps: 'Mount Street Gardens, London', icona: 'fiori' }
        ] },
        { nome: 'Pranzo', testo: 'Da scegliere insieme. Al parco, a un chiosco, se siamo a St James\'s. Nei caffè di Shepherd Market o da Mercato Mayfair, una food hall dentro una chiesa, se siamo dall\'altra parte.', ora: '13:00', maps: 'Shepherd Market, London' },
        { nome: 'V&A', testo: 'La più grande collezione al mondo di arti decorative e design, gratis. Gioielli, moda e le Cast Courts con il David di Michelangelo in gesso. Se ci va, un tè nelle sale Morris.', ora: '14:30', come: 'Da St James\'s, District o Circle line fino a South Kensington, circa 25 minuti in tutto. Da Shepherd Market, Piccadilly line da Green Park a South Kensington, circa 30 minuti in tutto.', maps: 'Victoria and Albert Museum, Cromwell Road, London', sito: 'https://www.vam.ac.uk/', icona: 'soffitto' },
        { nome: 'Albert Bridge al tramonto', testo: 'Alle 18:33 tramonta il sole e il ponte si accende con 4.000 luci. Agli ingressi c\'è ancora il cartello che chiede ai soldati di rompere il passo.', ora: '18:30', come: 'A piedi dal V&A attraverso Chelsea, circa mezz\'ora.', maps: 'Albert Bridge, London', icona: 'ponte' },
        { nome: 'Cittie of Yorke, High Holborn', testo: 'Cena in un pub dove si beve dal 1430, nei séparé di legno della sala grande. Ho già prenotato.', ora: '20:00', come: 'In taxi. Coi mezzi circa 45 minuti, bus 170 e metropolitana.', maps: 'Cittie of Yorke, High Holborn, London', icona: 'lampada' },
        { nome: 'Bankside Pier', testo: 'Il fiume di notte, sotto i ponti illuminati, fino a Canary Wharf.', ora: '22:00', come: 'Bus 17 fino a St Paul\'s e poi a piedi sul Millennium Bridge, una ventina di minuti; tutto a piedi circa mezz\'ora. Poi Uber Boat fino a Canary Wharf, 20 minuti. Nel weekend a Blackfriars non si ferma.', maps: 'Bankside Pier, London', icona: 'battello' }
      ]
    },
    {
      id: 'domenica', data: '2026-10-04', nome: 'Domenica 4 ottobre', colore: 'var(--dom)',
      meteo: 'Sole e nuvole · da 14° a 21°',
      fermate: [
        { nome: 'Colazione a casa', testo: 'Americano, come da regolamento.', ora: '09:00', come: 'Siamo a casa.', maps: 'Canary Wharf, London', icona: 'tazza' },
        { nome: 'Aether Coffee Lab', testo: 'Il secondo caffè lo proviamo da Aether, una torrefazione di Hackney che ha un locale qui a Canary Wharf. Io croissant e pain au chocolat li ho assaggiati, e mi sono sembrati francesi.', ora: '10:15', come: 'A piedi da casa, circa 10 minuti, in Park Drive vicino a Wood Wharf.', maps: 'Aether Coffee Lab, 11 Park Drive, London E14 9GG', icona: 'tazza' },
        { nome: 'Longplayer', testo: 'Un faro a Trinity Buoy Wharf dove suona una musica iniziata il 31 dicembre 1999 che finirà nel 2999. Apre alle 11, è gratis.', ora: '11:00', come: 'Bus D3 da Churchill Place fino a Leamouth, poi a piedi. Una ventina di minuti in tutto.', maps: 'Trinity Buoy Wharf, London', icona: 'faro' },
        { nome: 'The Marksman', testo: 'Il Sunday roast, nell\'East End. Già prenotato!', ora: '12:30', come: 'In taxi. Coi mezzi circa 50 minuti: a piedi fino a East India, DLR fino a Shadwell, Overground fino a Hoxton.', maps: 'The Marksman, 254 Hackney Road, London', sito: 'https://www.marksmanpublichouse.com/', icona: 'lampada' },
        { nome: 'Columbia Road', testo: 'Il mercato dei fiori della domenica, aperto fino alle 15.', ora: '14:00', come: 'A piedi, 3 minuti dal Marksman.', maps: 'Columbia Road Flower Market, London', icona: 'fiori' },
        { nome: 'Covent Garden', testo: 'La piazza, Seven Dials e Neal\'s Yard, con calma.', ora: '15:40', come: 'Bus 55 da Hackney Road fino a Tottenham Court Road, circa 40 minuti in tutto. Oppure taxi.', maps: 'Covent Garden, London' },
        { nome: 'Kiko, James Street 22', testo: 'Qui comandi tu, con tutta la calma che vuoi. La domenica apre dalle 11 alle 19.', ora: '16:00', come: 'A piedi, siamo già lì.', maps: 'KIKO Milano, 22 James Street, London' },
        { nome: 'Pomeriggio libero', testo: 'Quello che ci va.', ora: '17:00', maps: 'Covent Garden, London' },
        { nome: 'Cena a casa', testo: 'Da scegliere insieme cosa ci va.', ora: '19:30', come: 'Elizabeth line da Tottenham Court Road a Canary Wharf, 13 minuti. Da Covent Garden a casa circa 35 minuti in tutto.', maps: 'Canary Wharf, London' }
      ]
    }
  ];

  var CARTE = [
    { id: 'piano-b', nome: 'Piano B per sabato pomeriggio', testo: 'Al posto del V&A, il Sir John Soane\'s Museum, la casa più strana di Londra, gratis fino alle 17. Poi il tramonto da Waterloo Bridge e a cena a piedi.', icona: 'soffitto' },
    { id: 'goodwins-court', nome: 'Goodwin\'s Court', testo: 'L\'ho scoperto un giorno di marzo che ero salito a Londra, e ho pensato a te. Dicono che abbia ispirato la Diagon Alley di Harry Potter. A cinque minuti da Kiko.' },
    { id: 'chelsea-physic', nome: 'Chelsea Physic Garden', testo: 'Il giardino botanico più antico di Londra, gratis solo questo weekend, dalle 10 alle 17.', icona: 'fiori' },
    { id: 'japan-matsuri', nome: 'Japan Matsuri', testo: 'Domenica a Trafalgar Square, dalle 10 alle 20.' },
    { id: 'divano', nome: 'Divano, coperta e un film scelto da te.', breve: 'divano, coperta e film', testo: '' }
  ];

  /* ---------- Utilità ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function mapsUrl(q, da) {
    // con "da" apre il percorso a piedi da quel punto
    if (da) {
      return 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(da) +
        '&destination=' + encodeURIComponent(q) + '&travelmode=walking';
    }
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  }
  function minuti(hhmm) {
    var p = hhmm.split(':');
    return +p[0] * 60 + +p[1];
  }

  // pulsanti sotto la scheda: Maps e, se c'è, il sito
  function azioni(f) {
    return '<div class="azioni">' +
      '<a class="maps" href="' + mapsUrl(f.maps, f.da) + '" target="_blank" rel="noopener noreferrer">Apri in Maps</a>' +
      (f.sito ? '<a class="maps" href="' + esc(f.sito) + '" target="_blank" rel="noopener noreferrer">Sito</a>' : '') +
    '</div>';
  }

  /* ---------- Render linee ---------- */
  var main = document.getElementById('linee');
  var html = '';
  LINEE.forEach(function (l) {
    html += '<section class="linea" id="' + l.id + '" style="--c:' + l.colore + '" aria-labelledby="' + l.id + '-t">';
    html += '<h2 id="' + l.id + '-t" class="nome-linea">' + esc(l.nome) + '</h2>';
    html += '<p class="meteo" data-giorno="' + l.data + '">' + svg('meteo', 'ico ico--meteo') +
      '<span class="meteo-fisso">' + esc(l.meteo) + '</span>' +
      '<span class="meteo-live" hidden></span></p>';
    html += '<ol class="fermate">';
    l.fermate.forEach(function (f, i) {
      var pid = l.id + '-' + i;
      var testa = '<li class="fermata' + (f.rami ? ' bivio' : '') + '" data-min="' + minuti(f.ora) + '">' +
        '<span class="ora">' + f.ora + '</span>' +
        '<span class="binario" aria-hidden="true"><span class="pallino"></span></span>';
      if (f.rami) {
        html += testa +
          '<div class="corpo"><p class="nome nome-bivio">' + esc(f.nome) + '</p>' +
            (f.testo ? '<p class="testo testo-bivio">' + esc(f.testo) + '</p>' : '') +
          '</div>' +
          '<div class="rami">' + f.rami.map(function (r) {
            return '<div class="ramo" data-ramo="' + r.id + '">' +
              '<button class="scegli-ramo" type="button" aria-pressed="false">' +
                '<span class="ramo-etichetta">' + esc(r.etichetta) + '</span>' +
                '<span class="ramo-nome">' + esc(r.nome) + '</span>' +
              '</button>' +
              (r.testo ? '<p class="ramo-testo">' + esc(r.testo) + '</p>' : '') +
              (r.come ? '<dl class="dettagli"><div><dt>Come ci arriviamo</dt><dd>' + esc(r.come) + '</dd></div></dl>' : '') +
              azioni(r) +
            '</div>';
          }).join('') + '</div>' +
        '</li>';
        return;
      }
      html += testa +
        '<div class="corpo">' +
          '<button class="apri" type="button" aria-expanded="false" aria-controls="' + pid + '">' +
            '<span class="nome">' + esc(f.nome) + '</span>' +
            '<svg class="freccia" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</button>' +
          '<div class="scheda" id="' + pid + '"><div class="scheda-dentro">' +
            (f.icona ? '<span class="illustrazione">' + svg(f.icona) + '</span>' : '') +
            (f.testo ? '<p class="testo">' + esc(f.testo) + '</p>' : '') +
            '<dl class="dettagli">' +
              '<div><dt>Orario indicativo</dt><dd>' + f.ora + '</dd></div>' +
              (f.come ? '<div><dt>Come ci arriviamo</dt><dd>' + esc(f.come) + '</dd></div>' : '') +
            '</dl>' +
            azioni(f) +
          '</div></div>' +
        '</div>' +
      '</li>';
    });
    html += '</ol></section>';
  });
  main.innerHTML = html;

  main.addEventListener('click', function (e) {
    var b = e.target.closest('.apri');
    if (!b) return;
    var aperto = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!aperto));
    b.closest('.fermata').classList.toggle('aperta', !aperto);
  });

  /* ---------- Il bivio: la scelta del ramo resta salvata ---------- */
  var CHIAVE_BIVIO = 'london-bivio';
  var ramoScelto = null;
  try { ramoScelto = localStorage.getItem(CHIAVE_BIVIO); } catch (err) { ramoScelto = null; }

  function mostraRamo() {
    document.querySelectorAll('.bivio').forEach(function (bv) {
      bv.classList.toggle('deciso', !!ramoScelto);
      bv.querySelectorAll('.ramo').forEach(function (r) {
        var on = r.getAttribute('data-ramo') === ramoScelto;
        r.classList.toggle('scelto', on);
        r.querySelector('.scegli-ramo').setAttribute('aria-pressed', String(on));
      });
    });
  }
  mostraRamo();

  main.addEventListener('click', function (e) {
    var b = e.target.closest('.scegli-ramo');
    if (!b) return;
    var id = b.closest('.ramo').getAttribute('data-ramo');
    ramoScelto = ramoScelto === id ? null : id; // un secondo tocco annulla la scelta
    try {
      if (ramoScelto) localStorage.setItem(CHIAVE_BIVIO, ramoScelto);
      else localStorage.removeItem(CHIAVE_BIVIO);
    } catch (err) { /* niente */ }
    mostraRamo();
  });

  /* ---------- Request stop ---------- */
  var CHIAVE = 'tre-giorni-request-stop';
  var scelte = [];
  try {
    var salvate = JSON.parse(localStorage.getItem(CHIAVE) || '[]');
    if (Array.isArray(salvate)) scelte = salvate;
  } catch (err) { scelte = []; }

  var ul = document.getElementById('carte');
  ul.innerHTML = CARTE.map(function (c) {
    var on = scelte.indexOf(c.id) !== -1;
    return '<li class="carta' + (on ? ' scelta' : '') + '" data-id="' + c.id + '">' +
      (c.icona ? '<span class="illustrazione">' + svg(c.icona) + '</span>' : '') +
      '<h3>' + esc(c.nome) + '</h3>' +
      (c.testo ? '<p>' + esc(c.testo) + '</p>' : '') +
      '<button type="button" class="ferma" aria-pressed="' + on + '"><span class="spia" aria-hidden="true"></span>Ferma qui</button>' +
    '</li>';
  }).join('');

  /* ---------- Messaggio WhatsApp con le scelte ---------- */
  // senza numero: WhatsApp apre la lista dei contatti e lei sceglie "Fede."
  var manda = document.getElementById('manda');
  var mandaRiepilogo = document.getElementById('manda-riepilogo');
  var mandaBottone = document.getElementById('manda-bottone');

  function elenco(nomi) {
    if (nomi.length < 2) return nomi.join('');
    return nomi.slice(0, -1).join(', ') + ' e ' + nomi[nomi.length - 1];
  }

  function aggiornaManda() {
    var nomi = CARTE.filter(function (c) { return scelte.indexOf(c.id) !== -1; })
      .map(function (c) { return c.breve || c.nome; });
    manda.hidden = nomi.length === 0;
    if (!nomi.length) return;
    mandaRiepilogo.textContent = 'Hai scelto: ' + elenco(nomi) + '.';
    var testo = 'Request stop! Mi va: ' + elenco(nomi) + '.';
    mandaBottone.href = 'https://wa.me/?text=' + encodeURIComponent(testo);
  }
  aggiornaManda();

  ul.addEventListener('click', function (e) {
    var b = e.target.closest('.ferma');
    if (!b) return;
    var li = b.closest('.carta');
    var id = li.getAttribute('data-id');
    var on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', String(on));
    li.classList.toggle('scelta', on);
    scelte = scelte.filter(function (x) { return x !== id; });
    if (on) scelte.push(id);
    try { localStorage.setItem(CHIAVE, JSON.stringify(scelte)); } catch (err) { /* niente */ }
    aggiornaManda();
  });

  /* ---------- Ora di Londra ---------- */
  var ARRIVO = Date.UTC(2026, 9, 2, 17, 50); // 2 ottobre 2026, 18:50 BST

  function adessoLondra() {
    // ?t=2026-10-03T15:10 per provare un orario (ora di Londra, BST)
    var t = null;
    try { t = new URLSearchParams(location.search).get('t'); } catch (err) { t = null; }
    var m = t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(t);
    if (m) {
      return {
        data: m[1] + '-' + m[2] + '-' + m[3],
        min: +m[4] * 60 + +m[5],
        ms: Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4] - 1, +m[5])
      };
    }
    var ora = new Date();
    var p = {};
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(ora).forEach(function (x) { p[x.type] = x.value; });
    return { data: p.year + '-' + p.month + '-' + p.day, min: +p.hour * 60 + +p.minute, ms: ora.getTime() };
  }

  function giorniTra(a, b) {
    var pa = a.split('-'), pb = b.split('-');
    return Math.round((Date.UTC(+pb[0], pb[1] - 1, +pb[2]) - Date.UTC(+pa[0], pa[1] - 1, +pa[2])) / 864e5);
  }

  var contatore = document.getElementById('contatore');
  var primoGiro = true;

  function aggiorna() {
    var n = adessoLondra();
    var diff = ARRIVO - n.ms;

    if (diff > 0) {
      var g = giorniTra(n.data, '2026-10-02');
      var testo;
      if (g >= 1) testo = g === 1 ? 'manca 1 giorno' : 'mancano ' + g + ' giorni';
      else {
        var h = Math.ceil(diff / 36e5);
        if (h > 1) testo = 'mancano ' + h + ' ore';
        else {
          var mm = Math.ceil(diff / 6e4);
          testo = mm === 1 ? 'manca 1 minuto' : 'mancano ' + mm + ' minuti';
        }
      }
      contatore.textContent = testo;
      contatore.hidden = false;
    } else {
      contatore.hidden = true;
    }

    document.querySelectorAll('.qui').forEach(function (el) { el.classList.remove('qui'); });
    var linea = diff <= 0 && LINEE.filter(function (l) { return l.data === n.data; })[0];
    if (linea) {
      var migliore = null, dist = Infinity;
      document.querySelectorAll('#' + linea.id + ' .fermata').forEach(function (li) {
        var d = Math.abs(+li.getAttribute('data-min') - n.min);
        if (d < dist) { dist = d; migliore = li; }
      });
      if (migliore) {
        migliore.classList.add('qui');
        if (primoGiro) {
          setTimeout(function () { migliore.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 400);
        }
      }
    }
    primoGiro = false;
  }

  // segnaposto "sei qui" nel pallino
  document.querySelectorAll('.fermata .binario').forEach(function (b) {
    var s = document.createElement('span');
    s.className = 'sei-qui';
    s.textContent = 'sei qui';
    b.appendChild(s);
  });

  aggiorna();
  setInterval(aggiorna, 60000);

  /* ---------- Meteo in tempo reale (Open-Meteo) ---------- */
  // prima il modello del Met Office, poi quello standard, altrimenti restano i valori fissi
  (function meteo() {
    if (!window.fetch) return;
    var base = 'https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276' +
      '&timezone=Europe%2FLondon&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&start_date=2026-10-02&end_date=2026-10-04';

    function oraLondra() {
      try {
        return new Intl.DateTimeFormat('it-IT', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date());
      } catch (err) { return ''; }
    }

    function scarica(url) {
      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
      return fetch(url, ctrl ? { signal: ctrl.signal } : {})
        .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
        .then(function (j) {
          if (timer) clearTimeout(timer);
          var d = j && j.daily;
          if (!d || !d.time) throw new Error('vuoto');
          var righe = d.time.map(function (giorno, i) {
            return { giorno: giorno, max: d.temperature_2m_max[i], min: d.temperature_2m_min[i],
              pioggia: d.precipitation_probability_max ? d.precipitation_probability_max[i] : null };
          }).filter(function (x) { return typeof x.max === 'number' && typeof x.min === 'number'; });
          if (!righe.length) throw new Error('vuoto');
          return righe;
        }, function (err) { if (timer) clearTimeout(timer); throw err; });
    }

    function mostra(righe) {
      var ora = oraLondra();
      righe.forEach(function (x) {
        var el = document.querySelector('.meteo[data-giorno="' + x.giorno + '"] .meteo-live');
        if (!el) return;
        el.innerHTML = 'max ' + Math.round(x.max) + '° · min ' + Math.round(x.min) + '°' +
          (typeof x.pioggia === 'number' ? ' · pioggia ' + Math.round(x.pioggia) + '%' : '') +
          (ora ? ' <small>aggiornato alle ' + ora + '</small>' : '');
        el.hidden = false;
      });
    }

    scarica(base + '&models=ukmo_seamless')
      .catch(function () { return scarica(base); })
      .then(mostra)
      .catch(function () { /* restano i valori fissi */ });
  })();
})();
