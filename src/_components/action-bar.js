export const css = `
  .action-bar {
    display: flex;
    padding: 0;
    gap: 1rem;
    flex-wrap: wrap;
    list-style: none;
  }
`;

export default function ({ report }) {
  let actions = '';
  if (report) actions += `<li><a href="${report}">Download the report</a></li>`;
  if (actions === undefined) return;
  return `<ul class="action-bar">${actions}</ul>`;
}