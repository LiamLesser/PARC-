function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
  const titles = {
    home: 'Dashboard', echolink: 'EchoLink', repeaters: 'Repeaters',
    nets: 'Nets & Schedule', events: 'Events', members: 'Members',
    resources: 'Resources', about: 'About PARC'
  };
  const el = document.getElementById('topbar-title');
  if (el) el.textContent = titles[name] || name;
}

function setActive(el) {
  document.querySelectorAll('#sidebar .nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
}

function setTabActive(el) {
  document.querySelectorAll('.tab-bar .tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  const tabMap = {
    'Dashboard': 'home', 'EchoLink': 'echolink', 'Repeaters': 'repeaters',
    'Nets & Schedule': 'nets', 'Events': 'events', 'Members': 'members',
    'Resources': 'resources', 'About': 'about'
  };
  const label = el.textContent.trim();
  const tabName = tabMap[label];
  if (tabName) {
    document.querySelectorAll('#sidebar .nav-item').forEach(n => {
      n.classList.remove('active');
      if (n.dataset.tab === tabName) n.classList.add('active');
    });
  }
}
