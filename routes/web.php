<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::group(['middleware' => 'guest'], function () {
    Route::match(['get', 'post'], 'login', [LoginController::class, 'index'])->name('login');

    Route::match(['get', 'post'], 'register', [RegisterController::class, 'index'])->name('register');
});

Route::post('logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [UserController::class, 'index'])->name('home');
});
