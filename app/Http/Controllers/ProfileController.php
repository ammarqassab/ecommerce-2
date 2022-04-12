<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\http\Controllers\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use File;

class ProfileController extends BaseController
{
    public function change_password(Request $request)
    {
            //return response()->json(request()->all(),200);
        $validator=Validator::make($request->all(),
        [
            'old_password'=>'required',
            'password'=>'required',
            'confirm_password'=>'required|same:password'
        ]);
        
        if($validator->fails())
        {
          //  return $this->sendError(' Error', ['error', 'Validator Fails']);
          return response()->json([
              'message'=>'validations fails',
              'errors'=>$validator->errors() ],422);
          
        }
        $user=$request->user();
        if (Hash::check($request->old_password,$user->password))
        {
              $user->update([
                  'password'=>Hash::make($request->password)
              ]);

              return response()->json([
                'message'=>'updated password successfully',],200);
            
          
        }
        else
        {
            return $this->sendError('Validator Error', $validator->errors());
        }
    }
    public function get_profile(Request $request)
    {

    }

    public function update_profile(Request $request)

    {
                $validator=Validator::make($request->all(),
                [
                    'firstname' => 'required',
                    'lastname' => 'required',
                    'username' => 'required|unique:users|max:30',
                    'email' => 'required|email',
                    'phone' => 'required|numeric',
                    'address' => 'required',
                    'profile_image'=>'file|mimes:jpeg,bmp,png,pdf,doc,docx'
                ]);
                if ($validator->fails())
                {
                  
                    return response()->json([
                        'message'=>'validations fails',
                        'errors'=>$validator->errors() ],422);
                    
                }
                $user=$request->user();
                if($request->hasFile('profile_image'))
                {
                    if ($user->profile_image)
                    {
                        $old_path=public_path().'/upload/profile_images/'.$user->profile_image;
                        if(File::exists($old_path))
                        {
                            File::delete($old_path);
                        }
                    }
                    $image_name='profile_image-'.time().'.'.$request->profile_image->extension();
                    $request->profile_image->move(public_path('/upload/profile_images'),$image_name);

                }
                else 
                {
                    $image_name=$user->profile_image;
                }

                $user->update([
                    'firstname' =>$request->firstname,
                    'lastname'=>$request->lastname,
                    'username'=>$request->username,
                    'email'=>$request->email,
                     'phone'=>$request->phone,
                    'address'=>$request->address,
                    'profile_image'=>$image_name
                ]);
                return response()->json([
                    'message'=>'updated profile successfully',],200);  
    }

}
