export function url(page) {
  console.log(page.data)
  return `/reports/${page.data.title}/`;
}

export const tags=['report'];
export const layout='report.njk';
