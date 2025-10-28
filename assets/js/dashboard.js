/* Dashboard WYZE-styled responsive CSS */
/* Uses Georgia as requested */
* { box-sizing: border-box; margin: 0; padding: 0; }
html,body { height: 100%; }
body {
  font-family: Georgia, serif;
  background: #f5f5f5;
  color: #222;
}

/* App layout */
.app { display: flex; min-height: 100vh; }

/* Sidebar */
.sidebar {
  width: 230px;
  background: #111;
  color: #fff;
  padding: 22px 14px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: transform .28s ease, width .2s ease;
  z-index: 30;
}
.brand { display:flex; align-items:center; gap:10px; }
.brand-logo { width:48px; height:auto; object-fit:contain; border-radius:6px; display:block; }
.brand-name { font-weight:700; font-size:18px; color:#fff; letter-spacing:1px; }

/* Navigation */
.nav { display:flex; flex-direction:column; gap:6px; margin-top:6px; }
.nav-link {
  display:block; padding:10px 12px; color:#ddd; text-decoration:none; border-radius:6px;
}
.nav-link:hover, .nav-link.active { background:#8B0000; color:#fff; }

/* Main area */
.main { flex:1; display:flex; flex-direction:column; min-height:100vh; margin-left:0; }

/* Topbar */
.topbar {
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 22px; background:#fff; border-bottom:1px solid #e6e6e6;
  position:sticky; top:0; z-index:20;
}
.hamburger {
  display:none;
  background:transparent; border:0; font-size:22px; cursor:pointer;
}
.page-title { color:#8B0000; font-size:20px; font-weight:700; }
.user { color:#555; font-size:14px; }

/* Content */
.content { padding:24px; max-width:1200px; margin: 16px auto 32px; width: calc(100% - 40px); }

/* Cards */
.cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px; margin-bottom:22px; }
.card { background:#fff; padding:18px; border-radius:10px; box-shadow:0 6px 18px rgba(0,0,0,0.06); text-align:center; }
.card h3 { font-size:14px; color:#333; margin-bottom:8px; }
.card .num { font-size:22px; font-weight:700; color:#000; }

/* Recent table */
.recent h2 { color:#333; margin-bottom:12px; }
.table-wrap { overflow-x:auto; background:#fff; border-radius:10px; box-shadow:0 6px 18px rgba(0,0,0,0.04); }
.table { width:100%; border-collapse:collapse; min-width:600px; }
.table th, .table td { padding:12px 14px; border-bottom:1px solid #eee; text-align:left; font-size:14px; }
.table thead th { background:#f7f7f7; color:#222; font-weight:700; }

/* Badges */
.badge { padding:6px 10px; border-radius:999px; font-size:13px; color:#fff; display:inline-block; }
.badge.open { background:#e11d48; }      /* deep red */
.badge.resolved { background:#16a34a; }  /* green */
.badge.pending { background:#f59e0b; }   /* amber */

/* Footer */
.footer { padding:18px; text-align:center; color:#666; font-size:13px; background:transparent; }

/* Responsive behavior */

/* Small tablets & phones: show hamburger, hide sidebar by transform */
@media (max-width: 992px) {
  .sidebar { position: fixed; left: 0; top: 0; height:100vh; transform: translateX(-110%); }
  .sidebar.show { transform: translateX(0); }
  .main { margin-left: 0; }
  .hamburger { display:block; }
  .brand-logo { width:44px; }
}

/* Very small phones - tighten paddings */
@media (max-width: 420px) {
  .topbar { padding:10px 12px; }
  .content { padding:14px; margin:12px; }
  .table th, .table td { padding:9px 10px; font-size:13px; }
}
