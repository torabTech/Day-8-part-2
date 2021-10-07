angular.module('ShoppingAppUI').factory('ItemFactory',ItemFactory);
function ItemFactory($http){

   function getAll(){
       return $http.get('/api/item').then(completed).catch(failed);
   }
   function getOne(id){
       return $http.get('/api/item/'+id).then(completed).catch(failed);
   }

    function completed(response){
        return response.data; 
    } 
    function failed (error){
        return error;
    }

   return {
       getAllItems : getAll,
       getOneItem : getOne
   }
}