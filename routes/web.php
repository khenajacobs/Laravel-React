<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;

Route::get('/', function () {
    return redirect('/welcome');
});

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/react-test', function () {
    return view('react-test');
});

Route::get('/random', function () {
    return view('random');
});

Route::get('/post-form', function () {
    return view('post-form');
});


Route::fallback(function () {
    return redirect('/welcome')->with('warning', 'The page you are looking for does not exist.');
});