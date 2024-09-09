<?php

use App\Http\Controllers\AbstractController;
use App\Http\Controllers\ControlController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/payment', function () {
    return Inertia::render('Payment');
})->middleware(['auth', 'verified'])->name('payment');

Route::get('/abstract', function () {
    return Inertia::render('Abstract');
})->middleware(['auth', 'verified'])->name('abstract');

Route::get("/guestabstract", function(){
    return Inertia::render("GuestAbstract");
})->name('guestabstract');

Route::post("/abstract/guest/store", [AbstractController::class, 'guestStore'])->name('abstract.guest.store');

Route::get('/conferencelist', [ControlController::class, 'index']);

Route::get('/approvals', function () {
    return Inertia::render('ConferenceApproval');
})->middleware(['auth', 'verified'])->name('approvals');

Route::get('/approvals/confirmattendance/{id}', [ControlController::class, 'confirmAttendance']);

Route::get('/abstractlist', function () {
    return Inertia::render('AbstractList');
})->middleware(['auth', 'verified'])->name('abstractlist');

Route::get('/listofabstracts', [ControlController::class, 'abstractList']);

Route::post("/abstract/store", [AbstractController::class, 'store'])->name('abstract.store');

Route::post("/payment/store", [PaymentController::class, 'store'])->name("payment.store");

Route::get('/card', function () {
    return Inertia::render('Card');
})->middleware(['auth', 'verified'])->name('card');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
