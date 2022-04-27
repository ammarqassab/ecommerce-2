<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       // Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status,
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->String('title');
            $table->String('summary');
            $table->String('description');
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('Cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('Cascade');
            $table->String('product_image');
            $table->integer('disscount');
            $table->integer('price');
            $table->integer('size');
            $table->String('condition');
            $table->integer('quantity');
            $table->String('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
