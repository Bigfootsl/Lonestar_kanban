<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RFCQ 26-05-03 — Submission Tracker | Immersivevision Technology</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#1F497D;--blue:#2E74B5;--blue-lt:#E6F1FB;--blue-mid:#B5D4F4;
  --white:#ffffff;--g50:#F8F9FA;--g100:#F1F3F5;--g200:#E9ECEF;--g300:#DEE2E6;
  --g400:#CED4DA;--g500:#ADB5BD;--g600:#6C757D;--g700:#495057;--g800:#343A40;--g900:#212529;
  --red:#A32D2D;--red-lt:#FCEBEB;--amber:#854F0B;--amber-lt:#FAEEDA;
  --green:#27500A;--green-lt:#EAF3DE;--purple:#3C3489;--purple-lt:#EEEDFE;
  --coral:#993C1D;--coral-lt:#FAECE7;
  --shadow-sm:0 1px 3px rgba(0,0,0,.08);--shadow-md:0 4px 16px rgba(0,0,0,.12);
  --r:8px;--r-lg:12px;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#EEF2F7;color:var(--g900);min-height:100vh;font-size:14px;line-height:1.5}

/* ── HEADER ─────────────────────────────────────── */
.header{background:var(--navy);color:#fff}
.header-top{display:flex;align-items:center;justify-content:space-between;padding:14px 28px;border-bottom:1px solid rgba(255,255,255,.1)}
.brand{display:flex;align-items:center;gap:12px}
.brand-logo{width:38px;height:38px;background:var(--blue);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;letter-spacing:-.5px;flex-shrink:0}
.brand-name{font-size:13px;font-weight:600;line-height:1.2}
.brand-sub{font-size:11px;color:rgba(255,255,255,.55)}
.hdr-actions{display:flex;gap:8px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:var(--r);font-size:12px;font-weight:500;cursor:pointer;border:none;transition:all .15s;text-decoration:none;white-space:nowrap;font-family:inherit}
.btn-ghost{background:rgba(255,255,255,.1);color:rgba(255,255,255,.85);border:1px solid rgba(255,255,255,.2)}
.btn-ghost:hover{background:rgba(255,255,255,.2)}
.btn-primary{background:#378ADD;color:#fff;border:1px solid transparent}
.btn-primary:hover{background:#2E74B5}
.btn-danger{background:#c0392b;color:#fff;border:1px solid transparent}
.btn-danger:hover{background:#922b21}
.btn-outline{background:#fff;color:var(--g700);border:1px solid var(--g300)}
.btn-outline:hover{background:var(--g50)}
.btn-save{background:var(--navy);color:#fff;border:1px solid transparent}
.btn-save:hover{background:var(--blue)}

.header-main{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:18px 28px 20px;flex-wrap:wrap}
.rfp-title{font-size:21px;font-weight:700;letter-spacing:-.3px;margin-bottom:4px}
.rfp-sub{font-size:13px;color:rgba(255,255,255,.65);margin-bottom:12px}
.rfp-meta{display:flex;gap:10px;flex-wrap:wrap}
.chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:rgba(255,255,255,.75);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);padding:4px 10px;border-radius:20px}

/* Countdown */
.countdown{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:var(--r-lg);padding:14px 20px;text-align:center;min-width:220px;flex-shrink:0}
.cd-label{font-size:10px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px}
.cd-digits{display:flex;justify-content:center;align-items:center;gap:10px}
.cd-unit{text-align:center}
.cd-num{font-size:26px;font-weight:700;color:#fff;line-height:1;font-variant-numeric:tabular-nums}
.cd-lbl{font-size:9px;color:rgba(255,255,255,.45);text-transform:uppercase;margin-top:2px}
.cd-sep{font-size:22px;font-weight:700;color:rgba(255,255,255,.35);padding-bottom:10px}
.cd-expired{font-size:14px;font-weight:600;color:#F09595;padding:8px 0}

/* Progress */
.progress-bar{background:rgba(0,0,0,.18);padding:11px 28px;display:flex;align-items:center;gap:14px}
.prog-label{font-size:11px;color:rgba(255,255,255,.65);white-space:nowrap}
.prog-track{flex:1;height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden}
.prog-fill{height:100%;background:#5EBD7E;border-radius:3px;transition:width .4s ease}
.prog-pct{font-size:11px;font-weight:600;color:#fff;min-width:32px;text-align:right}

/* ── BOARD WRAP ──────────────────────────────────── */
.board-wrap{padding:22px 28px 48px}
.summary-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px}
.stat-card{background:#fff;border-radius:var(--r);padding:13px 18px;box-shadow:var(--shadow-sm);display:flex;align-items:center;gap:14px;border:1px solid var(--g200)}
.stat-icon{width:38px;height:38px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.stat-num{font-size:22px;font-weight:700;color:var(--g900);line-height:1}
.stat-lbl{font-size:11px;color:var(--g600);margin-top:2px}

/* ── BOARD ───────────────────────────────────────── */
.board{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}
.column{background:var(--g100);border-radius:var(--r-lg);padding:12px;border:1px solid var(--g200)}
.col-head{display:flex;align-items:center;gap:8px;padding:5px 4px 11px;border-bottom:2px solid var(--g300);margin-bottom:10px}
.col-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.col-todo .col-dot{background:#ADB5BD}
.col-todo .col-head{border-bottom-color:#ADB5BD}
.col-inprog .col-dot{background:#EF9F27}
.col-inprog .col-head{border-bottom-color:#EF9F27}
.col-done .col-dot{background:#639922}
.col-done .col-head{border-bottom-color:#639922}
.col-name{font-size:11px;font-weight:700;color:var(--g700);text-transform:uppercase;letter-spacing:.6px}
.col-badge{margin-left:auto;background:var(--g200);color:var(--g600);font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px}
.col-body{min-height:60px;display:flex;flex-direction:column;gap:8px;transition:background .15s}
.col-body.drag-over{background:rgba(55,138,221,.07);border-radius:var(--r);outline:2px dashed #378ADD}

/* ── CARD ────────────────────────────────────────── */
.card{background:#fff;border-radius:var(--r);padding:12px 14px;box-shadow:var(--shadow-sm);border:1px solid var(--g200);cursor:grab;transition:box-shadow .15s,border-color .15s,opacity .15s;position:relative}
.card:hover{box-shadow:var(--shadow-md);border-color:var(--g300)}
.card.dragging{opacity:.35;cursor:grabbing}
.card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:6px}
.card-tag{font-size:10px;font-weight:600;padding:2px 8px;border-radius:20px;letter-spacing:.3px;white-space:nowrap;flex-shrink:0}
.tag-action{background:var(--coral-lt);color:var(--coral)}
.tag-legal{background:var(--purple-lt);color:var(--purple)}
.tag-docs{background:var(--blue-lt);color:var(--navy)}
.tag-pricing{background:var(--green-lt);color:var(--green)}
.tag-done{background:var(--green-lt);color:var(--green)}
.card-edit-btn{background:none;border:none;cursor:pointer;color:var(--g400);padding:0 2px;font-size:15px;border-radius:4px;flex-shrink:0;opacity:0;transition:opacity .15s;line-height:1}
.card:hover .card-edit-btn{opacity:1}
.card-edit-btn:hover{color:var(--navy)}
.card-title{font-size:13px;font-weight:600;color:var(--g900);line-height:1.4;margin-bottom:4px}
.pdot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px;vertical-align:middle;flex-shrink:0}
.pdot-critical{background:#E24B4A}
.pdot-high{background:#EF9F27}
.pdot-medium{background:#378ADD}
.pdot-low{background:#639922}
.card-desc{font-size:12px;color:var(--g600);line-height:1.55;margin-bottom:8px}
.card-footer{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.card-due{display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--g500);background:var(--g50);padding:2px 8px;border-radius:4px;border:1px solid var(--g200)}
.card-due.urgent{color:var(--coral);background:var(--coral-lt);border-color:#F5C4B3;font-weight:600}
.card-assignee{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--g600);margin-left:auto}
.avatar{width:20px;height:20px;border-radius:50%;background:var(--blue-lt);color:var(--navy);font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center}

/* Add card btn */
.add-btn{width:100%;margin-top:8px;padding:8px;background:none;border:1px dashed var(--g300);border-radius:var(--r);color:var(--g500);cursor:pointer;font-size:12px;font-weight:500;transition:all .15s;display:flex;align-items:center;justify-content:center;gap:5px;font-family:inherit}
.add-btn:hover{border-color:var(--blue);color:var(--blue);background:var(--blue-lt)}

/* ── MODAL ───────────────────────────────────────── */
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;display:flex;align-items:center;justify-content:center;padding:20px}
.backdrop.hidden{display:none}
.modal{background:#fff;border-radius:var(--r-lg);width:100%;max-width:520px;box-shadow:0 20px 60px rgba(0,0,0,.22);overflow:hidden;max-height:90vh;display:flex;flex-direction:column}
.modal-hdr{background:var(--navy);color:#fff;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.modal-ttl{font-size:15px;font-weight:600}
.modal-x{background:none;border:none;color:rgba(255,255,255,.65);cursor:pointer;font-size:22px;line-height:1;padding:0;transition:color .15s}
.modal-x:hover{color:#fff}
.modal-body{padding:20px;overflow-y:auto}
.modal-ftr{padding:14px 20px;border-top:1px solid var(--g200);display:flex;justify-content:flex-end;gap:8px;flex-shrink:0;align-items:center}
.form-group{margin-bottom:14px}
.form-lbl{display:block;font-size:11px;font-weight:700;color:var(--g700);margin-bottom:5px;text-transform:uppercase;letter-spacing:.4px}
.form-ctrl{width:100%;padding:8px 12px;border:1px solid var(--g300);border-radius:var(--r);font-size:13px;color:var(--g900);font-family:inherit;transition:border-color .15s;background:#fff}
.form-ctrl:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(46,116,181,.12)}
textarea.form-ctrl{resize:vertical;min-height:80px;line-height:1.5}
select.form-ctrl{cursor:pointer}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* Share input */
.share-row{display:flex;gap:8px;margin-top:10px}
.share-input{flex:1;padding:8px 12px;border:1px solid var(--g300);border-radius:var(--r);font-size:11px;color:var(--g700);background:var(--g50);font-family:monospace;min-width:0}

/* Toast */
.toast{position:fixed;bottom:24px;right:24px;background:var(--g900);color:#fff;padding:10px 18px;border-radius:var(--r);font-size:13px;font-weight:500;z-index:999;box-shadow:var(--shadow-md);opacity:0;transform:translateY(8px);transition:all .25s;pointer-events:none}
.toast.show{opacity:1;transform:translateY(0)}

/* Responsive */
@media(max-width:780px){
  .board{grid-template-columns:1fr}
  .header-main{flex-direction:column}
  .countdown{min-width:unset;width:100%}
  .board-wrap,.header-top,.header-main,.progress-bar{padding-left:16px;padding-right:16px}
  .summary-row{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
}
</style>
</head>
<body>

<header class="header">
  <div class="header-top">
    <div class="brand">
      <div class="brand-logo">IV</div>
      <div>
        <div class="brand-name">Immersivevision Technology, Inc.</div>
        <div class="brand-sub">Lone Star College System &mdash; RFP Submission Tracker</div>
      </div>
    </div>
    <div class="hdr-actions">
      <button class="btn btn-ghost" onclick="openShareModal()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Share board
      </button>
      <button class="btn btn-ghost" onclick="resetBoard()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
        Reset to defaults
      </button>
    </div>
  </div>

  <div class="header-main">
    <div>
      <div class="rfp-title">RFCQ 26-05-03 &mdash; Submission Tracker</div>
      <div class="rfp-sub">Clinical Diagnostic Imaging &amp; Medical Education Equipment &nbsp;&middot;&nbsp; Lone Star College System</div>
      <div class="rfp-meta">
        <span class="chip">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Due May 28, 2026 &nbsp;&bull;&nbsp; 10:00 AM CT
        </span>
        <span class="chip">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          TIPS USA &nbsp;&bull;&nbsp; Contract #12281
        </span>
        <span class="chip">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Cadaviz Prem-7 Upright &nbsp;&bull;&nbsp; $71,180
        </span>
      </div>
    </div>
    <div class="countdown">
      <div class="cd-label">Time remaining until deadline</div>
      <div id="cd-display">
        <div class="cd-digits">
          <div class="cd-unit"><div class="cd-num" id="cd-d">--</div><div class="cd-lbl">days</div></div>
          <div class="cd-sep">:</div>
          <div class="cd-unit"><div class="cd-num" id="cd-h">--</div><div class="cd-lbl">hrs</div></div>
          <div class="cd-sep">:</div>
          <div class="cd-unit"><div class="cd-num" id="cd-m">--</div><div class="cd-lbl">min</div></div>
          <div class="cd-sep">:</div>
          <div class="cd-unit"><div class="cd-num" id="cd-s">--</div><div class="cd-lbl">sec</div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="progress-bar">
    <span class="prog-label">Overall completion</span>
    <div class="prog-track"><div class="prog-fill" id="prog-fill" style="width:0%"></div></div>
    <span class="prog-pct" id="prog-pct">0%</span>
  </div>
</header>

<div class="board-wrap">
  <div class="summary-row">
    <div class="stat-card">
      <div class="stat-icon" style="background:#F1EFE8;font-size:20px">📋</div>
      <div><div class="stat-num" id="s-todo">0</div><div class="stat-lbl">To do</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:#FAEEDA;font-size:20px">⚡</div>
      <div><div class="stat-num" id="s-inprog">0</div><div class="stat-lbl">In progress</div></div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:#EAF3DE;font-size:20px">✅</div>
      <div><div class="stat-num" id="s-done">0</div><div class="stat-lbl">Done</div></div>
    </div>
  </div>

  <div class="board" id="board">
    <div class="column col-todo" data-col="todo">
      <div class="col-head">
        <div class="col-dot"></div>
        <span class="col-name">To do</span>
        <span class="col-badge" id="cnt-todo">0</span>
      </div>
      <div class="col-body" id="body-todo"></div>
      <button class="add-btn" onclick="openAdd('todo')">&#43; Add task</button>
    </div>
    <div class="column col-inprog" data-col="inprog">
      <div class="col-head">
        <div class="col-dot"></div>
        <span class="col-name">In progress</span>
        <span class="col-badge" id="cnt-inprog">0</span>
      </div>
      <div class="col-body" id="body-inprog"></div>
      <button class="add-btn" onclick="openAdd('inprog')">&#43; Add task</button>
    </div>
    <div class="column col-done" data-col="done">
      <div class="col-head">
        <div class="col-dot"></div>
        <span class="col-name">Done</span>
        <span class="col-badge" id="cnt-done">0</span>
      </div>
      <div class="col-body" id="body-done"></div>
      <button class="add-btn" onclick="openAdd('done')">&#43; Add task</button>
    </div>
  </div>
</div>

<!-- Card modal -->
<div class="backdrop hidden" id="card-modal">
  <div class="modal">
    <div class="modal-hdr">
      <span class="modal-ttl" id="m-title">Add task</span>
      <button class="modal-x" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <input type="hidden" id="f-id">
      <div class="form-group">
        <label class="form-lbl">Task title *</label>
        <input class="form-ctrl" id="f-title" type="text" placeholder="What needs to be done?">
      </div>
      <div class="form-group">
        <label class="form-lbl">Description / notes</label>
        <textarea class="form-ctrl" id="f-desc" placeholder="Additional details, links, or instructions..."></textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-lbl">Category</label>
          <select class="form-ctrl" id="f-tag">
            <option value="action">Action required</option>
            <option value="legal">Legal filing</option>
            <option value="docs">Documents</option>
            <option value="pricing">Pricing</option>
            <option value="done">Complete</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-lbl">Priority</label>
          <select class="form-ctrl" id="f-pri">
            <option value="critical">🔴 Critical</option>
            <option value="high">🟠 High</option>
            <option value="medium">🔵 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-lbl">Due / deadline</label>
          <input class="form-ctrl" id="f-due" type="text" placeholder="e.g. Before May 28">
        </div>
        <div class="form-group">
          <label class="form-lbl">Assigned to</label>
          <input class="form-ctrl" id="f-assignee" type="text" placeholder="Name or initials">
        </div>
      </div>
      <div class="form-group">
        <label class="form-lbl">Column</label>
        <select class="form-ctrl" id="f-col">
          <option value="todo">To do</option>
          <option value="inprog">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
    <div class="modal-ftr">
      <button class="btn btn-danger" id="del-btn" onclick="deleteCard()" style="display:none;margin-right:auto">Delete</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-save" onclick="saveCard()">Save task</button>
    </div>
  </div>
</div>

<!-- Share modal -->
<div class="backdrop hidden" id="share-modal">
  <div class="modal">
    <div class="modal-hdr">
      <span class="modal-ttl">Share this board</span>
      <button class="modal-x" onclick="closeShare()">&times;</button>
    </div>
    <div class="modal-body">
      <p style="font-size:13px;color:var(--g700);line-height:1.6;margin-bottom:16px">
        The link below encodes the <strong>current state of the board</strong> — anyone who opens it sees the board exactly as it is right now, including all columns, cards, assignees, and notes.<br><br>
        Each collaborator's changes save to their own browser. To sync progress, copy and re-share a fresh link at any time.
      </p>
      <label class="form-lbl">Shareable link</label>
      <div class="share-row">
        <input class="share-input" id="share-url" readonly>
        <button class="btn btn-primary" onclick="copyLink()">Copy link</button>
      </div>
      <p style="font-size:11px;color:var(--g500);margin-top:10px">Tip: save this file to a shared folder (Google Drive, Dropbox, SharePoint) so your team can open it directly from there.</p>
    </div>
    <div class="modal-ftr">
      <button class="btn btn-outline" onclick="closeShare()">Close</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>
// ── Default cards ─────────────────────────────────────────────
const DEFAULTS = [
  {id:'c1',col:'todo',tag:'action',pri:'critical',title:'Insert TIPS Contract #12281 expiration date',desc:'Add to Attribute 11 in the bid response document (flagged in orange). Required before submission — LSCS will reject without it.',due:'Before submission',urgent:true,assignee:''},
  {id:'c2',col:'todo',tag:'action',pri:'critical',title:'Confirm TIPS USA fee status',desc:'Verify whether TIPS USA charges any admin/transaction fees for this order type. Answer yes or no in Attribute 12 of the bid response.',due:'Before submission',urgent:true,assignee:''},
  {id:'c3',col:'todo',tag:'legal',pri:'critical',title:'File Form 1295 with Texas Ethics Commission',desc:'File electronically at ethics.state.tx.us/filinginfo/1295. Print the completed form (includes a unique certification number), have an authorized agent sign it, and attach to the Ion Wave response.',due:'Before May 28',urgent:true,assignee:''},
  {id:'c4',col:'todo',tag:'docs',pri:'critical',title:'Add 3 customer references',desc:'Institution name, contact name, email address, and phone number required for each. Missing or incomplete references may disqualify the bid per Attribute 19.',due:'Before submission',urgent:true,assignee:''},
  {id:'c5',col:'todo',tag:'docs',pri:'high',title:'Upload W-9 to Ion Wave Required Attachments',desc:'Completed and signed Form W-9 (EIN 37-2174720, signed 05/02/2025) is ready. Upload to the Required Attachments tab in the LSCS Ion Wave eBid system.',due:'Before submission',urgent:false,assignee:''},
  {id:'c6',col:'todo',tag:'docs',pri:'high',title:'Upload Spec Compliance Matrix to Ion Wave',desc:'Upload RFCQ_26-05-03_Spec_Compliance_Matrix.docx to the Response Attachments tab in Ion Wave. This document maps all 14 RFP requirements to Cadaviz capabilities.',due:'Before submission',urgent:false,assignee:''},
  {id:'c7',col:'todo',tag:'legal',pri:'medium',title:'Review Conflict of Interest — Form CIQ',desc:'If any employee, owner, or officer of Immersivevision has a business, family, or gift relationship with an LSCS officer or Board Trustee, file Form CIQ and attach. Form at: ethics.state.tx.us/forms/conflict/',due:'Before submission',urgent:false,assignee:''},
  {id:'c8',col:'todo',tag:'pricing',pri:'low',title:'Consider 4-year extended warranty upgrade',desc:'The Prem-7 Upright 4-yr extended warranty ($15,667.20) brings total coverage to 5 years, fully satisfying the RFP\'s 5-year warranty requirement. Currently marked as partially compliant. Optional but recommended.',due:'Optional',urgent:false,assignee:''},
  {id:'c9',col:'todo',tag:'action',pri:'critical',title:'Submit bid via LSCS Ion Wave eBid system',desc:'Complete all attribute responses in Ion Wave, upload all required and response attachments, confirm pricing, and submit before 10:00 AM CT on May 28, 2026. Late submissions are not accepted.',due:'May 28, 10:00 AM CT',urgent:true,assignee:''},
  {id:'c10',col:'done',tag:'done',pri:'low',title:'Bid Response Document drafted',desc:'All 25 bid attributes responded to. Pricing set at $71,180 (Cadaviz Prem-7 Upright $67,780 + White Glove delivery $3,400). Supplier notes and company information complete.',due:'',urgent:false,assignee:'Steven King'},
  {id:'c11',col:'done',tag:'done',pri:'low',title:'Spec Compliance Matrix drafted',desc:'14 RFP requirements mapped — 13 fully compliant, 1 partially compliant (5-year warranty; see upgrade card). Attached as response document.',due:'',urgent:false,assignee:'Steven King'},
  {id:'c12',col:'done',tag:'done',pri:'low',title:'W-9 prepared and signed',desc:'Completed Form W-9 for Immersivevision Technology, Inc. (EIN 37-2174720). Signed by authorized party on 05/02/2025. Ready to upload.',due:'',urgent:false,assignee:''},
  {id:'c13',col:'done',tag:'done',pri:'low',title:'Product and pricing confirmed',desc:'Cadaviz Prem-7 Upright, SKU: Prem7Tilt. Unit price $71,180 FOB Lone Star College (includes White Glove delivery). 1-Year Manufacturer\'s Warranty included at no charge.',due:'',urgent:false,assignee:''},
];

const TAG_LABELS = {action:'Action required',legal:'Legal filing',docs:'Documents',pricing:'Pricing',done:'Complete'};
const KEY = 'rfcq_26_05_03';

let cards = [];
let editId = null;
let dragId = null;

// ── State persistence ─────────────────────────────────────────
function load() {
  try {
    const h = window.location.hash.slice(1);
    if (h) { const d = JSON.parse(atob(h)); if (Array.isArray(d) && d.length) { cards = d; return; } }
  } catch(e) {}
  try {
    const s = localStorage.getItem(KEY);
    if (s) { cards = JSON.parse(s); return; }
  } catch(e) {}
  cards = JSON.parse(JSON.stringify(DEFAULTS));
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(cards)); } catch(e) {}
  try { history.replaceState(null,'','#'+btoa(JSON.stringify(cards))); } catch(e) {}
}

// ── Countdown ─────────────────────────────────────────────────
function tick() {
  const dead = new Date('2026-05-28T10:00:00-05:00').getTime();
  const diff = dead - Date.now();
  if (diff <= 0) {
    document.getElementById('cd-display').innerHTML = '<div class="cd-expired">Deadline has passed</div>';
    return;
  }
  const pad = n => String(Math.floor(n)).padStart(2,'0');
  document.getElementById('cd-d').textContent = pad(diff/86400000);
  document.getElementById('cd-h').textContent = pad((diff%86400000)/3600000);
  document.getElementById('cd-m').textContent = pad((diff%3600000)/60000);
  document.getElementById('cd-s').textContent = pad((diff%60000)/1000);
}

// ── Progress ─────────────────────────────────────────────────
function updateStats() {
  const total = cards.length;
  const done = cards.filter(c=>c.col==='done').length;
  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById('prog-fill').style.width = pct+'%';
  document.getElementById('prog-pct').textContent = pct+'%';
  ['todo','inprog','done'].forEach(col => {
    const n = cards.filter(c=>c.col===col).length;
    document.getElementById('cnt-'+col).textContent = n;
    document.getElementById('s-'+col).textContent = n;
  });
}

// ── Render ────────────────────────────────────────────────────
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function buildCard(card) {
  const el = document.createElement('div');
  el.className = 'card';
  el.id = 'card-'+card.id;
  el.draggable = true;
  el.dataset.id = card.id;
  const initials = card.assignee ? card.assignee.trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2) : '';
  el.innerHTML =
    '<div class="card-top">' +
      '<span class="card-tag tag-'+card.tag+'">'+(TAG_LABELS[card.tag]||card.tag)+'</span>' +
      '<button class="card-edit-btn" onclick="openEdit(\''+card.id+'\')" title="Edit task">&#9998;</button>' +
    '</div>' +
    '<div class="card-title"><span class="pdot pdot-'+(card.pri||'medium')+'"></span>'+esc(card.title)+'</div>' +
    (card.desc ? '<div class="card-desc">'+esc(card.desc)+'</div>' : '') +
    '<div class="card-footer">' +
      (card.due ? '<span class="card-due'+(card.urgent?' urgent':'')+'">'+esc(card.due)+'</span>' : '') +
      (initials ? '<span class="card-assignee"><span class="avatar">'+esc(initials)+'</span>'+esc(card.assignee)+'</span>' : '') +
    '</div>';
  el.addEventListener('dragstart', e => { dragId = card.id; setTimeout(()=>el.classList.add('dragging'),0); });
  el.addEventListener('dragend', () => { el.classList.remove('dragging'); dragId=null; document.querySelectorAll('.col-body').forEach(b=>b.classList.remove('drag-over')); });
  el.addEventListener('dblclick', () => openEdit(card.id));
  return el;
}

function render() {
  ['todo','inprog','done'].forEach(col => {
    const body = document.getElementById('body-'+col);
    body.innerHTML = '';
    cards.filter(c=>c.col===col).forEach(c=>body.appendChild(buildCard(c)));
  });
  setupDrop();
  updateStats();
}

function setupDrop() {
  document.querySelectorAll('.col-body').forEach(body => {
    body.addEventListener('dragover', e => {
      e.preventDefault();
      body.classList.add('drag-over');
      const dragging = document.getElementById('card-'+dragId);
      if (!dragging) return;
      const after = getAfter(body, e.clientY);
      if (after) body.insertBefore(dragging, after); else body.appendChild(dragging);
    });
    body.addEventListener('dragleave', () => body.classList.remove('drag-over'));
    body.addEventListener('drop', e => {
      e.preventDefault();
      body.classList.remove('drag-over');
      const col = body.closest('[data-col]').dataset.col;
      const card = cards.find(c=>c.id===dragId);
      if (card) { card.col = col; save(); render(); }
    });
  });
}

function getAfter(container, y) {
  return [...container.querySelectorAll('.card:not(.dragging)')].reduce((cl, el) => {
    const box = el.getBoundingClientRect();
    const off = y - box.top - box.height/2;
    return (off < 0 && off > cl.offset) ? {offset:off,el} : cl;
  }, {offset:-Infinity}).el;
}

// ── Modal ─────────────────────────────────────────────────────
function openAdd(col) {
  editId = null;
  document.getElementById('m-title').textContent = 'Add task';
  document.getElementById('del-btn').style.display = 'none';
  ['f-title','f-desc','f-due','f-assignee'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-tag').value = 'action';
  document.getElementById('f-pri').value = 'medium';
  document.getElementById('f-col').value = col;
  document.getElementById('card-modal').classList.remove('hidden');
  setTimeout(()=>document.getElementById('f-title').focus(),60);
}

function openEdit(id) {
  const c = cards.find(x=>x.id===id);
  if (!c) return;
  editId = id;
  document.getElementById('m-title').textContent = 'Edit task';
  document.getElementById('del-btn').style.display = 'block';
  document.getElementById('f-title').value = c.title;
  document.getElementById('f-desc').value = c.desc||'';
  document.getElementById('f-tag').value = c.tag;
  document.getElementById('f-pri').value = c.pri||'medium';
  document.getElementById('f-due').value = c.due||'';
  document.getElementById('f-assignee').value = c.assignee||'';
  document.getElementById('f-col').value = c.col;
  document.getElementById('card-modal').classList.remove('hidden');
  setTimeout(()=>document.getElementById('f-title').focus(),60);
}

function closeModal() { document.getElementById('card-modal').classList.add('hidden'); editId=null; }

function saveCard() {
  const title = document.getElementById('f-title').value.trim();
  if (!title) { document.getElementById('f-title').focus(); return; }
  const due = document.getElementById('f-due').value.trim();
  const urgent = /may 28|critical|deadline|submission/i.test(due) || document.getElementById('f-pri').value==='critical';
  if (editId) {
    const c = cards.find(x=>x.id===editId);
    if (c) {
      c.title=title; c.desc=document.getElementById('f-desc').value.trim();
      c.tag=document.getElementById('f-tag').value; c.pri=document.getElementById('f-pri').value;
      c.due=due; c.urgent=urgent; c.assignee=document.getElementById('f-assignee').value.trim();
      c.col=document.getElementById('f-col').value;
    }
  } else {
    cards.push({id:'c'+Date.now(),col:document.getElementById('f-col').value,tag:document.getElementById('f-tag').value,
      pri:document.getElementById('f-pri').value,title,desc:document.getElementById('f-desc').value.trim(),
      due,urgent,assignee:document.getElementById('f-assignee').value.trim()});
  }
  save(); render(); closeModal(); toast(editId?'Task updated ✓':'Task added ✓');
}

function deleteCard() {
  if (!editId||!confirm('Delete this task?')) return;
  cards = cards.filter(c=>c.id!==editId);
  save(); render(); closeModal(); toast('Task deleted');
}

// ── Share ─────────────────────────────────────────────────────
function openShareModal() {
  const url = location.href.split('#')[0]+'#'+btoa(JSON.stringify(cards));
  document.getElementById('share-url').value = url;
  document.getElementById('share-modal').classList.remove('hidden');
}
function closeShare() { document.getElementById('share-modal').classList.add('hidden'); }
function copyLink() {
  const el = document.getElementById('share-url');
  el.select(); el.setSelectionRange(0,99999);
  try { document.execCommand('copy'); toast('Link copied to clipboard!'); }
  catch(e) { toast('Select and copy the link manually'); }
}

// ── Reset ─────────────────────────────────────────────────────
function resetBoard() {
  if (!confirm('Reset to default tasks? All your changes will be lost.')) return;
  cards = JSON.parse(JSON.stringify(DEFAULTS));
  save(); render(); toast('Board reset to defaults');
}

// ── Toast ─────────────────────────────────────────────────────
let _tt;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(_tt); _tt = setTimeout(()=>el.classList.remove('show'),2400);
}

// ── Backdrop clicks ───────────────────────────────────────────
document.getElementById('card-modal').addEventListener('click',e=>{ if(e.target===document.getElementById('card-modal'))closeModal(); });
document.getElementById('share-modal').addEventListener('click',e=>{ if(e.target===document.getElementById('share-modal'))closeShare(); });

// ── Keyboard ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeModal(); closeShare(); }
  if (e.key==='Enter' && !e.shiftKey && document.activeElement && document.activeElement.id==='f-title') saveCard();
});

// ── Init ──────────────────────────────────────────────────────
load(); render(); tick(); setInterval(tick,1000);
</script>
</body>
</html>
