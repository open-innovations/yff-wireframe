export const layout = 'report.njk';
export const tags = ['report'];

/**
 * Generator function which creates a page per report data object.
 * 
 * The report object appears as a object of report definitions defined with a key.
 * 
 * @param { reports:  } options
 */

export default function* ({ reports }) {
  for (const report of Object.values(reports)) {
    yield {
      url: `/reports/${report.title}/`,
      ...report,
    }
  }
}