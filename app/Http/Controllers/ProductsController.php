<?php

namespace App\Http\Controllers;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use File;

class productsController extends BaseController
{

###################### ############################################
  /* get all product  and photo  */

  public function index()
  {
      //['title', 'photo','Summary','Description','Brand','Category']
      $products = Product::all();
      return $this->sendResponse($products, 'products successfully');
  }
  ##################################################################
     /* add new product  */
    public function store(Request $request)
    {
        $input = $request->all();
     
        $validator = Validator::make($input, [
            'title' => 'required',
            'summary' => 'required',
            'description' => 'required',
            'brand_id' => 'required',
            'category_id' => 'required',
            'product_image' => 'required|file|mimes:jpeg,bmp,png,pdf,doc,docx',
            'disscount'=>'required',
            'price'=>'required',
            'size'=>'required',
            'condition'=>'required',
            'quantity'=>'required',
            'status'=>'required'

        ]);
       // $product->brand()->create(['title'])
        if ($validator->fails())
        {
            return $this->sendError('validate Error', $validator->errors());
        }
        if($request->hasFile('product_image'))
        {
            $image_name='product_image-'.time().'.'.$request->product_image->extension();
            $request->product_image->move(public_path('/upload/product_images'),$image_name);
            $input['product_image']=$image_name;
        }

        $user = Auth::user();
        $input['user_id'] = Auth::id();

       
        $products = Product::create([
            'title' => $request->title,
            'price' =>  $request->price,
            'brand_id' => $request->brand_id,
            'category_id' => $request->category_id,
            'summary' => $request->summary,
            'description' => $request->description, 
            
            'product_image' => $image_name,
            'disscount' =>  $request->disscount,
            'size' => $request->size,
            'condition' => $request->condition,
            'quantity' => $request->quantity,
            'status' => $request->status,
        ]);
        return $this->sendResponse($products, 'product added successfully');
    }
    ##################################################################
    ##################################################################
      /* update product  */
    public function update(Request $request, $id)
    {
        $errorMessage = [];
        $products = Product::find($id);
        $input = $request->all();
        if ($products == null) {
            return $this->sendError('the product does not exist', $errorMessage);
        }

        $validator = Validator::make($input, [
            'title' =>'required',
            'price' => 'required',
            'category_id' =>'required',
             'summary' => 'required',
           'description' =>'required',
           'brand_id' =>'required',
           'product_image' => 'required|file|mimes:jpeg,bmp,png,pdf,doc,docx',
           'disscount' =>'required',
           'size' =>'required',
        'condition' =>'required',
        'quantity' =>'required',
        'status' =>'required',
                  
        ]);
        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors());
        }

        if($request->hasFile('product_image'))
        {
            if ( $products->product_image)
            {
                $old_path=public_path().'/upload/product_images/'. $products->product_image;
                if(File::exists($old_path))
                {
                    File::delete($old_path);
                }
            }
            $image_name='product_image-'.time().'.'.$request->product_image->extension();
            $request->product_image->move(public_path('/upload/product_images'),$image_name);

        }
        else 
        {
            $image_name=$products->product_image;
        }
        dd(request->all());
        $products->save();
        return $this->sendResponse($products, 'product update');
    }
     ##################################################################
      /* delete product  */
    public function destroy($id)
    {
        $errorMessage = [];
        $products = Product::find($id);

        if ($products == null) {
            return $this->sendError('the product does not exist', $errorMessage);
        }
        $products->delete();
        return $this->sendResponse(true, 'product delete successfully');
    }
}
