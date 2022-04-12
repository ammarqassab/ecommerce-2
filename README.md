<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>


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

 -  Logout : http://127.0.0.1:8000/api/ Logout
   token ---> message logout successful

  - change_password : http://127.0.0.1:8000/api/change_password
   token (header)  - old_password - password - confirm_password  ------> seccefull update 
 
- update_profile : http://127.0.0.1:8000/api/update_profile

firstname-lastname-username-email-phone-address-profile_image  ---> same information updated

----
php artisan migrate:fresh seed : create tables with admin seeddr 
Admin :
ahmad@gmail.com
123456
---
install sanctum 
## end update 01

 