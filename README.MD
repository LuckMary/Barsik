## Для установки eslint и prettier:

```
yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint
```

## Для .eslintrc

```
{
"parser": "babel-eslint",
"env": {
    "node": true,
    "browser": true,
    "es6": true
},
"extends": ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
"plugins": ["prettier"],
"rules": {
    "react/jsx-filename-extension": [0],
    "react/prop-types": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-props-no-spreading": [0],

    "react-hooks/exhaustive-deps": [0],

    "no-alert": [0],
    "no-use-before-define": [0],
    "arrow-body-style": [0],
    "no-console": [0],
    "import/prefer-default-export": [0]

    }
}
```

## Для .prettierrc

```
{
"semi": false,
"trailingComma": "none",
"singleQuote": true,
"printWidth": 80,
"arrowParens": "avoid"
}
```

## Для settings.json

```
{
"git.autofetch": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}
```
