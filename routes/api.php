<?php

use App\Http\Controllers\ControlController;
use Illuminate\Support\Facades\Route;

Route::post("/resetpassword", [ControlController::class, 'resetPassword'])->name('resetpassword');