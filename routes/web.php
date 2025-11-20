<?php

use App\Http\Controllers\PostController;
use App\Models\Mobil;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $mobils = Mobil::limit(4)->get();
    return Inertia::render('Home', ['mobils' => $mobils]);
});
Route::get('/daftar-mobil', function () {
    $mobils = Mobil::all();
    return Inertia::render('DaftarMobil', ['mobils' => $mobils]);
});
Route::get('/reservasi', function () {
    $mobils = Mobil::all();
    return Inertia::render('Reservasi', ['mobils' => $mobils]);
});
Route::get('/kontak', function () {
    return Inertia::render('Kontak');
});

Route::get('/artikel', function () {
    $artikels = Post::where('status', 'published')->get();
    return Inertia::render('Artikel', ['artikels' => $artikels]);
});
Route::get('/artikel/{slug}',  [PostController::class, 'show']);
