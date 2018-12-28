# webpack-handlebars-whitespace-loader

> Webpack loader removes useless whitespaces from handlebars rendering output.

## Install

```sh
npm install --save-dev webpack-handlebars-whitespace-loader
yarn add webpack-handlebars-whitespace-loader --dev
```

## Usage

### Configuration example

**webpack.confib.js**

```js
module: {
        rules: [
            {
                test: /.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            partialDirs: [templatesDir],
                            knownHelpersOnly: false
                        }
                    },
                    {
                        loader: 'webpack-handlebars-whitespace-loader'
                    }
                ]
            }
        ]
    }
```

### Input - Handlebars rendered html

```html
<div>
    <ul     id="list" >
        <li     class="list-element"      > element 1 </li>
        <li     class="list-element"      > 
            element       2 
        </li>
        <li     class="list-element"      > Element 5 </li>
    </ul>
    <img          src="http://img"                />
</div>
```

### Output - removed whitespaces from rendered html
```html
<div><ul id="list" ><li class="list-element" >element 1</li><li class="list-element" >element 2</li><li class="list-element" >Element 5</li></ul><img src="http://img" /></div>
```
