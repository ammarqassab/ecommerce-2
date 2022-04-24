
## Project installation
- git clone https://
- .env.example => .env
- composer install
- php artisan key:generate
- npm install
- php artisan serve
## end of installation

## update 01 : 
  - Register :  http://127.0.0.1:8000/api/register   
firstname-lastname-username-email-phone-address-password-c_password-profile_image ----> token - username

-  Login :   http://127.0.0.1:8000/api/login 
   email - password --->  token-firstname-lastname-username-email-phone-address-password-c_password-profile_image - role (user,admin)

 -  Logout : http://127.0.0.1:8000/api/Logout
   token ---> message logout successful

  - change_password : http://127.0.0.1:8000/api/change_password
   token (header)  - old_password - password - confirm_password  ------> seccefull update 
 
- update_profile : http://127.0.0.1:8000/api/update_profile

firstname-lastname-username-email-phone-address-profile_image  ---> same information updated

----
php artisan migrate:fresh --seed : create tables with admin seeddr 
Admin :
ahmad@gmail.com
123456
---
install sanctum 
## end update 01

## update 02
- 1-new table brand
- brand table (id(number),title(text),Status(text),data)
- 
- all brand : get:(http://127.0.0.1:8000/api/dashboard/allbrand) , token admin 
- --> valid token , [{id, title, Status, data},{id, title, Status, data}]
- 
- add brand : post:(http://127.0.0.1:8000/api/dashboard/addbrand) , token admin , {title(text),Status(text)} --> valid token , massege add
- 
- delete brand : delete:(http://127.0.0.1:8000/api/dashboard/deletebrand) , token admin , {id(number)-title(text),Status(text)} 
- --> valid token , massege delete
- 
- edit brand : put:(http://127.0.0.1:8000/api/dashboard/editbrand) , token admin , {id(number)-title(text),Status(text)} 
- --> valid token , massege edit
- /////////////////////////////////////////////////////////////////////////////////////////////
- 2-new table category
- category table (id(number), title(text), Summary(text), photo(file), Status(text), data)
- 
- all category : get:(http://127.0.0.1:8000/api/dashboard/allcategory) , token admin 
- --> valid token , [{id, title, Summary, photo, Status, data},{id, title, Summary, photo, Status, data}]
- 
- add category : post:(http://127.0.0.1:8000/api/dashboard/addcategory) , token admin , {title, Summary, photo, Status} 
- --> valid token , massege add
- 
- delete category : delete:(http://127.0.0.1:8000/api/dashboard/deletecategory) , token admin ,{id, title, Summary, photo, Status, data}
- --> valid token , massege delete
- 
- edit category : put:(http://127.0.0.1:8000/api/dashboard/editcategory) , token admin , {id, title, Summary, photo, Status, data} 
- --> valid token , massege edit
- /////////////////////////////////////////////////////////////////////////////////////////////
- 3-new table Products
- Products table (id(n), Tital(t), Summary(t), Description(long text), Brand(t), Category(t), Price(n), Discount %(n), Size(t), Condition(t), Quantity(n), Photo(f), Status(t), data)
- 
- all Products : get:(http://127.0.0.1:8000/api/dashboard/allproducts) , token admin 
- --> valid token , [{id, Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status, data},{id, Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status, data}]
- 
- add Products : post:(http://127.0.0.1:8000/api/dashboard/addproducts) , token admin , {Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status} 
- --> valid token , massege add
- 
- delete Products : delete:(http://127.0.0.1:8000/api/dashboard/deleteproducts) , token admin ,{id, Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status, data}
- --> valid token , massege delete
- 
- edit Products : put:(http://127.0.0.1:8000/api/dashboard/editproducts) , token admin , {id, Tital, Summary, Description, Brand, Category, Price, Discount %, Size, Condition, Quantity, Photo, Status, data} 
- --> valid token , massege edit
## end update 02
