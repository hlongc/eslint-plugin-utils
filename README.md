# eslint-plugin-utils

check typeof

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-utils`:

```sh
npm install eslint-plugin-utils --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-utils` and add `utils` to the `plugins` key:

```js
import utils from "eslint-plugin-utils";

export default [
    {
        plugins: {
            utils
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import utils from "eslint-plugin-utils";

export default [
    {
        plugins: {
            utils
        },
        rules: {
            "utils/rule-name": "warn"
        }
    }
];
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


