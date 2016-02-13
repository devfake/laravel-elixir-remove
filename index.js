var gulp = require('gulp');
var elixir = require('laravel-elixir');
var del = del = require('del');

var Task = elixir.Task;
var config = elixir.config;

elixir.extend('remove', function(path) {
    new Task('remove', function() {
        return del(path);
    })
    .watch(elixir.config.assetsPath + '/**');
});
