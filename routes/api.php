<?php

use App\Http\Controllers\ControlController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("/resetpassword", [ControlController::class, 'resetPassword'])->name('resetpassword');