<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\http\Controllers\BaseController as BaseController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use File;

class CategoryController extends BaseController
{

##################################################################
  /* get all Category  */

  public function index()
  {
      $category = Category::all();
      return $this->sendResponse( $category , 'categorys successfully');
  }
  ##################################################################
     /* add new category  */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'summary' => 'required|string',
            'category_image' => 'required|file|mimes:jpeg,bmp,png,pdf,doc,docx',
            'status'=>'required|string',
            'disscount'=>'required',

        ]);
        if ($validator->fails())
        {
            return $this->sendError('validate Error', $validator->errors());
        }
        $input = $request->all();


        if($request->hasFile('category_image'))
        {
            $image_name='category_image-'.time().'.'.$request->category_image->extension();
            $request->category_image->move(public_path('/upload/category_images'),$image_name);
            $input['category_image']=$image_name;
        }


        $category = Category::create([
            'title' => $request->title,
            'summary' => $request->summary,
            'category_image' => $image_name,
            'status' => $request->status,
            'disscount'=>$request->disscount,


        ]);
        return $this->sendResponse($category, 'category added successfully');
    }
    ##################################################################
      /* update Category  */
    public function update(Request $request, $id)
    {
        $errorMessage = [];
        $category = Category::find($id);

        if ($category  == null) {
            return $this->sendError('the category does not exist', $errorMessage);
        }
        $validator = Validator::make($request->all(), [
            'title' =>'required',
            'summary' => 'required',
            'category_image' => 'file|mimes:jpeg,bmp,png,pdf,doc,docx',
            'status' =>'required',
             'disscount'=>'required',
        ]);
       // return $request->all();
        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors());
        }

        if($request->hasFile('category_image'))
        {
            if ($category->profile_image)
               {
                $old_path=public_path().'/upload/category_images'.$category->profile_image;
                if(File::exists($old_path))
                {
                    File::delete($old_path);
                }
            }
            $image_name='category_image-'.time().'.'.$request->category_image->extension();
            $request->category_image->move(public_path('/upload/category_images'),$image_name);

        }
        else
        {
            $image_name=$category->profile_image;
        }
        $category->update([
            'title'=>$request->title,
            'summary'=>$request->summary,
            'category_image' =>$image_name,
            'status'=>$request->status,
            'disscount'=>$request->disscount,
        ]);
        return $this->sendResponse($category, 'Category update');
    }
     ##################################################################
      /* delete caegory  */
    public function destroy($id)
    {
        $errorMessage = [];
        $category = Category::find($id);

        if ($category == null) {
            return $this->sendError('the category does not exist', $errorMessage);
        }
        $category->delete();
        return $this->sendResponse($category, 'category delete successfully');
    }
}
