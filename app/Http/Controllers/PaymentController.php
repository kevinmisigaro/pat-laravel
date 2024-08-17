<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            "subscription_type" => 'required|string|max:255',
            "transaction_number" => 'required|string|max:255',
        ]);

        if ($request->hasFile('file')) {
            $img_ext = $request->file('file')->getClientOriginalExtension();
            $filename = time() . '.' . $img_ext;
            $request->file('file')->move(public_path('paymentconfirmation'), $filename); //image save public folder

            Payment::create([
                'image' => $filename,
                "subscription_type" => $request->subscription_type,
                "transaction_number" => $request->transaction_number,
                "transaction_message" => $request->transaction_message,
                "user_id" => $request->user()->id
            ]);

            return back();
        }

        Payment::create([
            "subscription_type" => $request->subscription_type,
            "transaction_number" => $request->transaction_number,
            "transaction_message" => $request->transaction_message,
            "user_id" => $request->user()->id
        ]);

        return back();
    }
}
