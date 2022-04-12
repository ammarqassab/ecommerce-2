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
        return $this->sendResponse($success, 'USER REGISTER SUCCESSFULLU!');
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
            $success['profile_image'] = $user->profile_image;
            $success['role']=$role;
            return $this->sendResponse($success, 'login Successfully!');

        }
         else
        {
            return $this->sendError(' Error', ['error', 'Unauthorized']);
        }
    }

    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();


        return $this->sendResponse('Logout','USER logout Successfully!');

    }
}
