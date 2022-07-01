export const css = `
  .big-number {
    font-size: 3rem;
    text-align: center;
    border: none;
  }
`;

export default function({ number }) {
  return `
  <div class='big-number'>
    ${ number }
  </div>
`
}