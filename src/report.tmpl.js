export const layout = 'report.njk';
export const tags = ['report'];

export default function* ({ reports }) {
  for (const report of Object.values(reports)) {
    yield {
      url: `/reports/${report.title}/`,
      ...report,
    }
  }
}