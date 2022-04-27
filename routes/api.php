<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\AuthController;
use  App\Http\Controllers\ProfileController;
use  App\Http\Controllers\BrandController;
use  App\Http\Controllers\CategoryController;
use  App\Http\Controllers\ProductsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->group(function()
{
    Route::post('logout',[AuthController::class,'logout']);
    Route::post('change_password',[ProfileController::class,'change_password']);
    Route::post('update_profile',[ProfileController::class,'update_profile']);

});

Route::get('allbrand',[BrandController::class,'index']);
Route::get('allcategory',[CategoryController::class,'index']);
Route::get('allproduct',[ProductsController::class,'index']);
Route::group([
    'prefix'=>'dashboard',
    'middleware'=>['auth:sanctum','privateAdmin'],
],function()
{
    //Brands
    
    Route::post('addbrand',[BrandController::class,'store']);
    Route::post('editbrand/{id}',[BrandController::class,'update']);
    Route::delete('deletebrand/{id}',[BrandController::class,'destroy']);
    //Categories
    
    Route::post('addcategory',[CategoryController::class,'store']);
    Route::post('editcategory/{id}',[CategoryController::class,'update']);
    Route::delete('deletecategory/{id}',[CategoryController::class,'destroy']);
    //Products  //note : put intro xxx-w
   
    Route::post('addproduct',[ProductsController::class,'store']);
    Route::post('editproduct/{id}',[ProductsController::class,'update']);
    Route::delete('deleteproduct/{id}',[ProductsController::class,'destroy']);
});


Route::middleware(['auth:sanctum' , 'CheckAdmin'])->group(function()
{
    Route::post('dashboard',function() {

    });
});
 
