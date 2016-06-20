# Laravel Elixir Remove

Delete files / folders using globs with [del](https://www.npmjs.com/package/del) for [Laravel Elixir](https://github.com/laravel/elixir). This package is the same as [laravel-elixir-delete](https://www.npmjs.com/package/laravel-elixir-delete), but it works with Elixir version 5 and 6.

## Install

Install this package over npm.

```sh
npm install laravel-elixir-remove --save-dev
```

Require it in your `gulpfile.js` and use it.

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-remove');

elixir(function(mix) {

  mix.remove('src/file.js');
  
  // or for multiple files:
  
  mix.remove(['src/file.js', 'other/file.js']);

});
```
