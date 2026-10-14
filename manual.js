const japanese = document.documentElement.lang === 'ja';
const states = japanese ? {
  before: {
    src: 'assets/enclosure-before.png',
    alt: '青い7マスを囲む赤い輪の右側に、まだ塗られていない隙間が1マスあります。赤いプレイヤーは隙間の外側にいます。',
    title: '1マスでも隙間があると、囲いは未完成。',
    description: '内側の青い7マスは、まだ相手チームの陣地です。右側の隙間を塗ると、輪が閉じます。'
  },
  after: {
    src: 'assets/enclosure-after.png',
    alt: '右側の隙間が赤く塗られ、輪の内側にあった青い7マスがすべて赤に変わっています。',
    title: '隙間を閉じると、内側の7マスを一括取得。',
    description: '最後の1マスを塗って赤い輪が完成すると、内側の7マスが即座に赤へ変わります。1マスずつ踏む必要はありません。'
  }
} : {
  before: {
    src: 'assets/enclosure-before.png',
    alt: 'A red loop around seven blue tiles has one unpainted gap on its right side. The red player stands outside the gap.',
    title: 'One gap keeps the loop open.',
    description: 'The seven blue tiles inside still belong to the other team. Paint the missing tile on the right to close the loop.'
  },
  after: {
    src: 'assets/enclosure-after.png',
    alt: 'The gap on the right is now red. All seven blue tiles inside the completed loop have turned red.',
    title: 'Close the gap. Capture seven tiles at once.',
    description: 'The final tile completes the red boundary. The seven tiles inside immediately turn red, without stepping on each one.'
  }
};
const comparisonImage = document.querySelector('#enclosure-image');
document.querySelectorAll('[data-state]').forEach(button => {
  button.addEventListener('click', () => {
    const state = states[button.dataset.state];
    comparisonImage.src = state.src;
    comparisonImage.alt = state.alt;
    document.querySelector('#comparison-title').textContent = state.title;
    document.querySelector('#comparison-description').textContent = state.description;
    document.querySelectorAll('[data-state]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  });
});
const viewer = document.querySelector('#image-viewer');
document.querySelectorAll('[data-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    viewer.querySelector('img').src = source.src;
    viewer.querySelector('img').alt = source.alt;
    viewer.querySelector('.viewer-caption').textContent = source.alt;
    viewer.showModal();
  });
});
viewer.querySelector('.close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
const links = [...document.querySelectorAll('.contents nav a')];
const sections = links.map(link => document.querySelector(link.hash));
function updateContents() {
  let current = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top < 180) current = section;
  for (const link of links) {
    if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
document.addEventListener('scroll', updateContents, { passive: true });
updateContents();

// Keep the reader in the same chapter when switching languages. Plain relative
// links still work without JavaScript and when opened directly from disk.
function updateLanguageLinks(hash = location.hash) {
  document.querySelectorAll('.language-switch a').forEach(link => {
    const target = new URL(link.getAttribute('href'), location.href);
    target.hash = hash;
    link.href = target.href;
  });
}
window.addEventListener('hashchange', () => updateLanguageLinks());
updateLanguageLinks();
