import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: './src',
  location: new URL("https://open-innovations.github.io/yff-wireframe/"),
});
site.use(basePath());

// Process all css files
site.use(postcss({
  sourceMap: true,
}));

export default site;
