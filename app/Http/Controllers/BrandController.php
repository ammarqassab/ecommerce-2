<?php

namespace App\Http\Controllers;
use App\Models\Brand;
use App\http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use File;

class BrandController extends BaseController
{  
##################################################################
  /* get all Brands  */

  public function index()
  {
     $brands = Brand::all();
      return $this->sendResponse($brands, 'All brands successfully');
  }
 
  ##################################################################
     /* add new brand  */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required|string',
            'status'=>'required|string',
        ]);
        if ($validator->fails()) {
            return $this->sendError('validate Error', $validator->errors());
        }
            $brand = Brand::create([
            'title' => $request->title,
            'status' => $request->status,
        ]);
        return $this->sendResponse($brand , 'brand added successfully');
    }
    ##################################################################
      /* update brand  */
    public function update(Request $request, $id)
    {
        $errorMessage = [];
        $brand = Brand::find($id);
        $input = $request->all();
        if ($brand  == null) {   return $this->sendError('the brand does not exist', $errorMessage); }
        $validator = Validator::make($input, [
            'title' =>'string',  'status' =>'string',      
        ]);

        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors());
        }
         
        $brand->update(
            [
               'title' =>$request->input('title'),
               'status' => $request->input('status'),
            ]);
            
        return $this->sendResponse($brand , 'brand updated successfully');
    }
     ##################################################################
      /* delete brand  */
    public function destroy($id)
    {
        $errorMessage = [];
        $brand = Brand::find($id);

        if ($brand == null) {
            return $this->sendError('the brand does not exist', $errorMessage);
        }
        $brand->delete();
        return $this->sendResponse(true, 'brand delete successfully');
    }
}
