<?php

use App\Http\Controllers\Auth\LoginController;
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
Route::match(['get', 'post'], 'login', [LoginController::class, 'index'])
    ->name('login')
    ->middleware('guest');

Route::post('logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => ['admin']], function () {
    Route::get('/', [UserController::class, 'index'])->name('home');
});
