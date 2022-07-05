// _components/search.js

export const css = `
.nav_list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
`;

export default function ({ search }) {
  const navItems = search.pages('nav_order!=undefined', 'nav_order')
  const links = navItems.map(page => `<li><a href="${ page.data.url }">${ page.data.title }</a></li>`);
  
    return `
<nav id='navigation'>
  <ul class='nav_list'>
  ${ links.join('') }
  </ul>
</nav>
`;
}