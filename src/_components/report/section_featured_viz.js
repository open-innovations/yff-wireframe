export default function ({ section, comp }) {
  const blocks = section.blocks;
  if (blocks === undefined) return;
  let featured = blocks.find(x => x.featured_block === true)
  if (featured === undefined) featured = blocks[0];
  console.log(featured.visualisations);
  return comp.viz.main({visualisations: featured.visualisations});
}