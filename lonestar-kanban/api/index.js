// Vercel serverless API — Kanban backend
// Uses Vercel KV (Redis) for shared state

const DEFAULT_DATA = {
  cards: [
    {id:"A",text:"File Form 1295 with Texas Ethics Commission (ethics.state.tx.us), print, sign, attach",sub:"MUST be done before submission — required for all Texas govt contracts",col:"backlog"},
    {id:"B",text:"Sign W-9 form",sub:"Immersivevision Technology Inc., EIN 37-2174720",col:"backlog"},
    {id:"C",text:"Get GL + Workers Comp insurance certificates",sub:"General Liability AND Workers Comp + Employer's Liability",col:"backlog"},
    {id:"D",text:"Ask Jennifer LaRue: Auto + Excess Liability certs required at bid or only after award?",sub:"Question deadline 5/26 10 AM CT — email drafted",col:"progress"},
    {id:"E",text:"Get Excess Liability certificate (if required)",sub:"Depends on answer to D",col:"backlog"},
    {id:"F",text:"Get Auto Liability certificate (if required)",sub:"Depends on answer to D",col:"backlog"},
    {id:"G",text:"Collect 3 references with full contact info",sub:"DY Patil, RDJM, Sree Balaji — letters on file",col:"backlog"},
    {id:"H",text:"Create submission documents for eBid portal",sub:"Ion Wave system — fill bid lines, attach W-9, 1295, insurance",col:"backlog"},
    {id:"I",text:"Register/confirm in Lone Star College eBid system",sub:"Ion Wave platform — lonestar.edu eBid",col:"backlog"},
    {id:"J",text:"Submit bid via eBid portal",sub:"Deadline: Wednesday 5/28 10:00 AM CT",col:"backlog"},
    {id:"K",text:"Optional: Extended warranty add-on pricing",sub:"2-yr or 4-yr extended warranty from price list",col:"backlog"},
    {id:"L",text:"Optional: Faculty training add-on",sub:"$1,800 from price list",col:"backlog"},
  ],
  checks: [
    {label:"Form 1295 filed electronically with Texas Ethics Commission",done:false},
    {label:"Form 1295 printed, signed, and scanned",done:false},
    {label:"W-9 signed",done:false},
    {label:"General Liability certificate obtained",done:false},
    {label:"Workers Comp / Employer's Liability certificate obtained",done:false},
    {label:"Auto Liability certificate obtained (if required)",done:false},
    {label:"Excess Liability certificate obtained (if required)",done:false},
    {label:"3 references compiled (name, institution, phone, email)",done:false},
    {label:"Insurance question sent to Jennifer LaRue",done:true},
    {label:"eBid portal registration confirmed",done:false},
    {label:"Bid Lines 1-3 filled (Line 1 = our bid, Lines 2-3 = No Bid)",done:false},
    {label:"All attributes/checkboxes completed in eBid",done:false},
    {label:"All attachments uploaded (W-9, 1295, insurance certs)",done:false},
    {label:"Electronic signature applied and proposal submitted",done:false},
  ]
};

// In-memory store (resets on each cold start — use KV for persistence)
let memoryStore = null;

function getStore() {
  if (!memoryStore) memoryStore = JSON.parse(JSON.stringify(DEFAULT_DATA));
  return memoryStore;
}

function setStore(data) {
  memoryStore = data;
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = req.url.split('?')[0];

  try {
    if (req.method === 'GET' && url === '/') {
      // Return full state
      return res.json(getStore());
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const store = getStore();

      if (url === '/move') {
        const card = store.cards.find(c => c.id === body.id);
        if (card) card.col = body.col;
        setStore(store);
        return res.json({ ok: true, data: store });
      }

      if (url === '/delete') {
        store.cards = store.cards.filter(c => c.id !== body.id);
        setStore(store);
        return res.json({ ok: true, data: store });
      }

      if (url === '/save') {
        if (body.isNew) {
          store.cards.push({ id: body.id, text: body.text, sub: body.sub, col: body.col });
        } else {
          const card = store.cards.find(c => c.id === body.oldId);
          if (card) { card.id = body.id; card.text = body.text; card.sub = body.sub; card.col = body.col; }
        }
        setStore(store);
        return res.json({ ok: true, data: store });
      }

      if (url === '/check') {
        if (store.checks[body.index]) {
          store.checks[body.index].done = body.done;
        }
        setStore(store);
        return res.json({ ok: true, data: store });
      }

      if (url === '/reset') {
        memoryStore = JSON.parse(JSON.stringify(DEFAULT_DATA));
        return res.json({ ok: true, data: memoryStore });
      }
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
