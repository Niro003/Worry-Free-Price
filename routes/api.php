<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('search/components/{title}', "ComponentsController@searchComponentsByTitle");
Route::get('search/{category}/components', "ComponentsController@searchComponentsByCategory");
Route::post('component/store', "ComponentsController@store");
Route::get('suggestions/components/{id}', "BundleController@getSuggestedComponents");
Route::get('component/statistics', "ComponentsController@getComponentStatistics");


Route::post('bundle/store', "BundleController@store");



