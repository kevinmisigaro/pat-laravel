<?php

namespace App\Http\Controllers;

use App\Models\Abstracts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AbstractController extends Controller
{
    public function guestStore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:jpg,png,pdf,doc,docx',
            'subtheme' => 'required|string|max:255'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make("pat1234!"),
            'role' => 3,
            'work' => "abstract",
            'pat_member' => false
        ]);

        $img_ext = $request->file('file')->getClientOriginalExtension();
        $bannerFilename = time() . '.' . $img_ext;
        $bannerPath = $request->file('file')->move(public_path('uploads'), $bannerFilename); //image save public folder

        Abstracts::create([
            'title' => $request->title,
            'subtheme' => $request->subtheme,
            'media' => $bannerFilename,
            'user_id' => $user->id,
            'coauthor' => $request->coauthor
        ]);

        return back();
    }

    public function store(Request $request)
    {

        // Validate the request data
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:jpg,png,pdf,doc,docx',
            'subtheme' => 'required|string|max:255'
        ]);

        $img_ext = $request->file('file')->getClientOriginalExtension();
        $bannerFilename = time() . '.' . $img_ext;
        $bannerPath = $request->file('file')->move(public_path('uploads'), $bannerFilename); //image save public folder

        Abstracts::create([
            'title' => $request->title,
            'subtheme' => $request->subtheme,
            'media' => $bannerFilename,
            'user_id' => $request->user()->id,
            'coauthor' => $request->coauthor
        ]);

        return back();
    }
}
