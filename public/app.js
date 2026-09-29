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
        { nome: 'DLR fino a Poplar', testo: 'Da Poplar a casa sono otto, dieci minuti.', ora: '19:20', come: 'In DLR fino a Poplar.', maps: 'Poplar DLR station, London' },
        { nome: 'Cena insieme', testo: 'E dopo due passi sulla banchina illuminata.', ora: '20:30', maps: 'Canary Wharf, London' }
      ]
    },
    {
      id: 'sabato', data: '2026-10-03', nome: 'Sabato 3 ottobre', colore: 'var(--sab)',
      meteo: 'Foschia al mattino, poi sole e nuvole · da 15° a 20°',
      fermate: [
        { nome: 'Colazione a casa', testo: '', ora: '09:00', come: 'Siamo a casa.', maps: 'Canary Wharf, London', icona: 'tazza' },
        { nome: 'Elizabeth line', testo: 'Da Canary Wharf dritti fino a Tottenham Court Road.', ora: '10:30', come: 'Elizabeth line da Canary Wharf, direzione ovest, fino a Tottenham Court Road.', maps: 'Canary Wharf Elizabeth line station' },
        { nome: 'Seven Dials e Neal\'s Yard', testo: 'Cortili colorati a due passi da Covent Garden, sperando che il cielo non sia troppo nuvoloso.', ora: '10:50', da: 'Tottenham Court Road station, London', maps: 'Neal\'s Yard, London' },
        { nome: 'Kiko, James Street 22', testo: 'Qui comandi tu. Aperto dalle 10 alle 20.', ora: '11:15', come: 'A piedi, attraverso Covent Garden.', maps: 'KIKO Milano, 22 James Street, London' },
        { nome: 'Goodwin\'s Court', testo: 'L\'ho scoperto un giorno di marzo che ero salito a Londra, e ho pensato a te. Dicono che abbia ispirato la Diagon Alley di Harry Potter.', ora: '12:00', come: 'A piedi, verso St Martin\'s Lane.', maps: 'Goodwin\'s Court, London' },
        { nome: 'Pranzo', testo: 'Tre idee, e decidiamo insieme sul momento: Dishoom, un caffè in stile Bombay proprio qui dietro in Upper St Martin\'s Lane; Seven Dials Market, un mercato coperto pieno di banchi di cucina da strada; oppure Bancone, pasta fresca fatta a mano, già sulla strada per il parco.', ora: '12:30', come: 'A piedi, siamo già lì.', maps: 'Covent Garden, London' },
        { nome: 'St James\'s Park', testo: 'Due passi nel parco e, se ce la facciamo, andiamo a vedere i pellicani che mangiano vicino a Duck Island Cottage, di solito tra le 14:30 e le 15.', ora: '14:00', come: 'A piedi, da Trafalgar Square lungo The Mall.', maps: 'Duck Island Cottage, St James\'s Park, London', icona: 'pellicano' },
        { nome: 'Chelsea Physic Garden', testo: 'Il giardino botanico più antico di Londra. Di solito il sabato è chiuso, questo weekend apre gratis dalle 10 alle 17, ultimo ingresso alle 16:30. Proviamo, se c\'è posto.', ora: '15:30', come: 'District o Circle line da St James\'s Park a Sloane Square, poi a piedi.', maps: 'Chelsea Physic Garden, London', icona: 'fiori' },
        { nome: 'Albert Bridge al tramonto', testo: 'Alle 18:33 tramonta il sole e il ponte si accende con 4.000 luci. Agli ingressi c\'è ancora il cartello che chiede ai soldati di rompere il passo.', ora: '18:30', come: 'A piedi lungo il fiume, sul Chelsea Embankment.', maps: 'Albert Bridge, London', icona: 'ponte' },
        { nome: 'Cittie of Yorke, High Holborn', testo: 'Cena in un pub dove si beve dal 1430, nei séparé di legno della sala grande. Ho già prenotato.', ora: '20:00', come: 'In taxi.', maps: 'Cittie of Yorke, High Holborn, London', icona: 'lampada' },
        { nome: 'A casa in battello', testo: 'Il fiume di notte, sotto i ponti illuminati, fino a Canary Wharf.', ora: '22:00', come: 'Fino al molo di Bankside, dall\'altra parte del Millennium Bridge, poi Uber Boat fino a Canary Wharf. Nel weekend a Blackfriars non si ferma.', maps: 'Bankside Pier, London', icona: 'battello' }
      ]
    },
    {
      id: 'domenica', data: '2026-10-04', nome: 'Domenica 4 ottobre', colore: 'var(--dom)',
      meteo: 'Sole e nuvole · da 15° a 20°',
      fermate: [
        { nome: 'Primo caffè a casa', testo: 'Americano, come da regolamento.', ora: '09:30', come: 'Siamo a casa.', maps: 'Canary Wharf, London', icona: 'tazza' },
        { nome: 'Aether Coffee Lab', testo: 'Il secondo caffè lo proviamo da Aether, una torrefazione di Hackney che ha un locale qui a Canary Wharf. Io croissant e pain au chocolat li ho assaggiati, e mi sono sembrati francesi.', ora: '10:30', come: 'In Park Drive, vicino a Wood Wharf.', maps: 'Aether Coffee Lab, 11 Park Drive, London E14 9GG', icona: 'tazza' },
        { nome: 'Island Gardens', testo: 'Il giardino in fondo all\'Isle of Dogs, con Greenwich proprio di fronte, dall\'altra parte del fiume.', ora: '11:45', come: 'In DLR, direzione Lewisham, fino a Island Gardens.', maps: 'Island Gardens, London' },
        { nome: 'Il tunnel', testo: 'A piedi sotto il Tamigi, dal 1902, e si esce a Greenwich.', ora: '12:00', come: 'L\'ingresso è la cupola dentro Island Gardens.', maps: 'Greenwich Foot Tunnel, London' },
        { nome: 'Pomeriggio libero', testo: 'Greenwich, il divano, oppure una delle fermate a richiesta.', ora: '12:30', come: 'Dipende da cosa scegli.', maps: 'Greenwich, London' },
        { nome: 'Cena libera', testo: 'Decidiamo al momento.', ora: '19:30', maps: 'Canary Wharf, London' }
      ]
    }
  ];

  var CARTE = [
    { id: 'columbia-road', nome: 'Columbia Road', testo: 'Il mercato dei fiori, solo la domenica, dalle 8 alle 15.', icona: 'fiori' },
    { id: 'longplayer', nome: 'Longplayer', testo: 'Un faro a Trinity Buoy Wharf dove suona una musica iniziata il 31 dicembre 1999 che finirà nel 2999. Sabato e domenica, dalle 11 alle 16. Gratis.', icona: 'faro' },
    { id: 'horizon-22', nome: 'Horizon 22', testo: 'Il piano panoramico gratuito più alto di Londra. Sabato fino alle 17.' },
    { id: 'npg', nome: 'National Portrait Gallery', testo: 'Se piove: il Portrait Award è gratuito fino al 7 ottobre.' },
    { id: 'japan-matsuri', nome: 'Japan Matsuri', testo: 'Domenica a Trafalgar Square, dalle 10 alle 20.' },
    { id: 'divano', nome: 'Divano, coperta e un film scelto da te.', testo: '' }
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
      html += '<li class="fermata" data-min="' + minuti(f.ora) + '">' +
        '<span class="ora">' + f.ora + '</span>' +
        '<span class="binario" aria-hidden="true"><span class="pallino"></span></span>' +
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
            '<a class="maps" href="' + mapsUrl(f.maps, f.da) + '" target="_blank" rel="noopener noreferrer">Apri in Maps</a>' +
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
  (function meteo() {
    if (!window.fetch) return;
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276' +
      '&timezone=Europe%2FLondon&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&start_date=2026-10-02&end_date=2026-10-04';
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
    fetch(url, ctrl ? { signal: ctrl.signal } : {})
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
      .then(function (j) {
        try {
          var d = j.daily;
          d.time.forEach(function (giorno, i) {
            var max = d.temperature_2m_max[i], min = d.temperature_2m_min[i], pioggia = d.precipitation_probability_max[i];
            if (typeof max !== 'number' || typeof min !== 'number') return;
            var el = document.querySelector('.meteo[data-giorno="' + giorno + '"] .meteo-live');
            if (!el) return;
            el.innerHTML = 'max ' + Math.round(max) + '° · min ' + Math.round(min) + '°' +
              (typeof pioggia === 'number' ? ' · pioggia ' + Math.round(pioggia) + '%' : '') +
              ' <small>aggiornato ora</small>';
            el.hidden = false;
          });
        } catch (err) { /* restano i valori fissi */ }
      })
      .catch(function () { /* restano i valori fissi */ })
      .then(function () { if (timer) clearTimeout(timer); });
  })();
})();
