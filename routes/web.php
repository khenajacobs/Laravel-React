<?php

use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/react-test', function () {
    return view('react-test');
});

Route::get('/random', function () {
    return view('random');
});

