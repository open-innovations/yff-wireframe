import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
  src: './src',
  location: new URL("https://open-innovations.github.io/yff-wireframe/"),
});
site.use(basePath());

// Copy all css files
site.copy([".css"]);

export default site;
