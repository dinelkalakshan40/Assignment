<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller{

    public function index(){
    return response()->json(User::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required',
            'email' => 'required|email|unique:users,email',
        ]);

        $user = User::create($validated);

        return response()->json($user, 201);
    }

    public function destroy($id){
        $user=User::find($id);
        if(!$user){
            return response()->json(['message' => 'User not found'],404);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted'],200);
    }
}
