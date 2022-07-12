import lume from "lume/mod.ts";

import basePath from "lume/plugins/base_path.ts";
import postcss from "lume/plugins/postcss.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";

const site = lume({
  src: './src',
  location: new URL("https://open-innovations.github.io/yff-wireframe/"),
});

// Also process .html files
site.loadPages(['.html'])

site.use(basePath());
site.use(resolveUrls());
site.use(slugifyUrls());

// Copy the admin directory
site.copy("admin/config.yml");

// Process all css files
site.use(postcss({
  sourceMap: true,
}));

export default site;
