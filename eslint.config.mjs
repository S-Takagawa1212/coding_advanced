import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          // アルファベット順をoffにする
          alphabetize: { order: "ignore", caseInsensitive: true },
          pathGroups: [
            {
              pattern: "**/base.css",
              group: "internal",
              position: "before",
            },
            {
              pattern: "**/style.css",
              group: "internal",
              position: "after",
              patternOptions: { matchBase: true },
            },
            {
              pattern: "bootstrap/dist/css/bootstrap.min.css",
              group: "internal",
              position: "after",
              patternOptions: { matchBase: true },
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
