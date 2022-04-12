<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\AuthController;
use  App\Http\Controllers\ProfileController;
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

Route::middleware(['auth:sanctum' , 'CheckAdmin'])->group(function()
{
    Route::post('dashboar',function()
    {
        return 'hello admin';
    });

});

Route::group(['middleware'=>'auth:sanctum','CheckAdmin'],function()
{
    Route::post('dashboard',function()
    {
        return 'hello admin';
    });
});

        
