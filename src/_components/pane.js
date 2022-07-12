export const css = `
.pane {
  padding: 0.5rem;
  display: block;
  height: 100%;
  overflow-y: scroll;
}
`;

export default function ({ content, link, tag = 'div' }) {
  // let paneContent = content;
  // if (link) {
  //   paneContent = `<a href=${link} class='>${content}</a>`
  //   `
  // } else {
  //   body = 
  // }

  if ( link ) {
    return `
      <${tag}>
        <a class='pane' href='${link}'>
          ${ content }
        </a>
      </${tag}>
    `;
  }

  return `
    <${tag} class='pane'>
      ${ content }
    </${tag}>
  `;



;
}