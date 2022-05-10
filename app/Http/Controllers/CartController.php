<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use App\Models\Cart;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\product as ProductResource;
use DateTime;

class CartController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    /*
    public function store(Request $request)
    {
        $data=array(
            'product_id'=>$request->product_id,
            'quantity'=>$request->quantity,
            'user_id'=>Auth::User()->id,
        );
        Cart::create($data);
    }
    */ 
    public function add_cart(Request $request, $id)
    {
        if(Auth::id())
        {
            $errorMessage = [];
            $user=Auth::user();  
            $product=product::find($id);
            if ($product  == null) 
            {
                return $this->sendError('the product does not exist', $errorMessage);
            }
            //return  $product; 
            //$cart=new Cart;
            //$cart->user_id=$user->id;
           // $cart->product_id=$product->id;
         /*   if($product->disscount)
            {
                $cartprice=($request->quantity*$product->price*$product->disscount)/(100);
            }
            else{
                $cartprice=$request->quantity*$product->price;
            } */
           // $cart->quantity=$request->quantity;
           
            $cart = Cart::create([
                'user_id' => $user->id,
                'product_id' => $product->id,
                'price' => $product->price,
                'quantity'=>$request->quantity,
    
    
            ]);
            return $this->sendResponse($cart,'Cart added ');

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */

    public function all_cart()
    {
        $carts=[];
        if(Auth::user())
        {
            $user_id=Auth::user()->id;
            $carts=Cart::Where('user_id',$user_id)->get(); // without get  :  data=[];
            return $this->sendResponse($carts,'Cart user');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update_cart(Request $request, $id)
    {
            $errorMessage = [];
            $cart = Cart::find($id);
            $input = $request->all();
            $user_id=Auth::user()->id;
            if ($cart == null) {
                return $this->sendError('the cart does not exist', $errorMessage);
            }
            if ($cart->user_id != Auth::id()) {
                return $this->sendError('you dont have rights', $errorMessage);
            }
    
            $validator = Validator::make($input, [
                'product_id' => 'required',
                'quantity' => 'required',
            ]);
            if ($validator->fails()) {
                return $this->sendError('validation error', $validator->errors());
    
            }
    
         /*   if ($request->product_id != null) {
                $cart->product_id = $input['product_id'];
            }
            if ($request->quantity != null) {
                $cart->quantity = $input['quantity'];
            }
            */
            $product=product::find($request->product_id);
            /*if($product->disscount)
            {
                $cart->price=$product->disscount*$request->quantity;
            }
            else{
                $cart->price=$product->price*$request->quantity;
            }*/
           
            $cart->update([
                'user_id' => $user_id,
                'product_id' =>$request->product_id,
                'price' => $product->price,
                'quantity'=>$request->quantity,
        
              ]);
            return $this->sendResponse($cart, 'cart update');
        }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        $cart=Cart::where('id',$id)->first();
        $cart->delete();
        return $this->sendResponse($cart, 'cart deleted');
    }
}
