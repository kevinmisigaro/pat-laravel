<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ControlController extends Controller
{
    public function index(){
        $list = User::where('role', '<>', 1)->get();
        return response()->json($list, 200);
    }

    public function confirmAttendance($id){
        $user = User::where('id', $id)->first();

        $user->update([
            'congress_confirmation' => !$user->congress_confirmation
        ]);

        return response()->json('Success', 200);
    }
}
