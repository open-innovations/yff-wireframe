import { parse } from 'std/encoding/csv.ts';

export default async function csvLoader(path: string) {
  const text = await Deno.readTextFile(path);
  const [header, ...data] = await (<Promise<[string[]]>>(
    parse(text)
  ));

  const rows = data.map((row) =>
    header.reduce(
      (a, k, i) => ({
        ...a,
        [k]: row[i],
      }),
      {}
    )
  );

  const columns = header.reduce(
    (a, k, i) => ({ ...a, [k]: data.map((r) => r[i]) }),
    {}
  );

  return { header, data, rows, columns };
}
