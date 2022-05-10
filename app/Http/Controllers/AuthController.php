<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\http\Controllers\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


use Illuminate\Support\Facades\Validator;

//use Laravel\Passport\RefreshToken;
//use Laravel\Passport\Token;

class AuthController extends BaseController
{


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'firstname' => 'required',
                'lastname' => 'required',
                'username' => 'required|unique:users|max:30',
                'email' => 'required|email',
                'phone' => 'required|numeric',
                'address' => 'required',
                'city' => 'required',
                'profile_image'=>'file|mimes:jpeg,bmp,png,pdf,doc,docx',
                'password' => 'required',
                'c_password' => 'required|same:password'
            ]);
        if ($validator->fails()) {
            return $this->sendError('Validator Error', $validator->errors());
        }

       // $image_name=$user->profile_image;
       // $request->profile_image->move(public_path('/upload/profile_images'),$image_name);
       // 'profile_image'=>$image_name


        $input = $request->all();

        $input['password'] = Hash::make($input['password']);

        if($request->hasFile('profile_image'))
        {
            $image_name='profile_image-'.time().'.'.$request->profile_image->extension();
            $request->profile_image->move(public_path('/upload/profile_images'),$image_name);
            $input['profile_image']=$image_name;
        }

        $user = User::create($input);
      /*  if ($user->role_as==1)
            {
                $role='admin';
                $success['token']=  $user->createToken('token-admin',['server:admin'])->plainTextToken;
            }
            else
            {
                $role='user';
                $success['token'] = $user->createToken('token-user',['server:user'])->plainTextToken;
            }  */
     //   $success['username'] = $user->username;
     return response()->json([
        'message'=>'register successfully',],200);
    }

    public function login(Request $request)
    {

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {


            $user = Auth::user();

            if ($user->role_as==1)
            {
                $role='admin';
                $success['token']=  $user->createToken('token-admin',['server:admin'])->plainTextToken;
            }
            else
            {
                $role='user';
                $success['token'] = $user->createToken('token-user',['server:user'])->plainTextToken;
            }

            $success['username'] = $user->username;
            $success['firstname'] = $user->firstname;
            $success['lastname'] = $user->lastname;
            $success['email'] = $user->email;
            $success['phone'] = $user->phone;
            $success['address'] = $user->address;
            $success['city'] = $user->city;
            $success['profile_image'] = $user->profile_image;
            $success['role']=$role;
            return $this->sendResponse($success, 'login Successfully!');

        }
         else
        {
            return $this->sendError(' Error', ['error', 'Unauthorized']);
        }
    }

    public function logout(Request $request)
    {

        auth()->user()->tokens()->delete();

        /* $request->user()->currentAccessToken()->delete();
        $user->tokens()->where('id', $tokenId)->delete(); */

        return $this->sendResponse('Logout','USER logout Successfully!');
        
    }
    public function showAllUser()
    {
        $user = User::get(['username','firstname','lastname','email','phone','address','city','profile_image']);
        return $this->sendResponse($user , 'All Users');
    }
    public function deleteUser($id)
    {
        $user=User::where('id',$id)->first();
        $user->delete();
        return $this->sendResponse($user, 'user deleted');

    }
}
