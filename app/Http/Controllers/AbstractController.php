<?php

namespace App\Http\Controllers;

use App\Models\Abstracts;
use Illuminate\Http\Request;


class AbstractController extends Controller
{
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
