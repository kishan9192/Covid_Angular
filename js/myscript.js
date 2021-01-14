let app = angular.module("MyApp", []);

const URL = "https://covid19.mathdro.id/api"


app.controller("MyCtrl", ($scope, $http) => {

    //this is the controller
    $scope.title = "Stay Home Stay Safe";

    // Button that changes title
    $scope.changeValue = ()=> {
        $scope.title = "दो गज की दूरी और मास्क ही है जरूरी!";
    };
    

    // Function to get the data from the server URL
    $http.get(URL).then( (response) => {
        // success coding
        console.log("Inside success");
        console.log(response.data);

        // using $scope so that we can access the data in our index.html
        $scope.all_data = response.data;

    } , (error) => {
        console.log(error);
    });

    
    $scope.getCountryData = ()=> {
        let country = $scope.c;
        if (country == "") {
            // This disappears the row when everything from the input is removed
            $scope.c_data = undefined;
            return;
        }

    // here last me "country is the varaible that has been defined above"
        $http.get(`${URL}/countries/${country}`)
        .then((response)=>{
            console.log(response.data);

            // This variable c_data has been made so that we can access the data of a country in our index.html file
            $scope.c_data = response.data; 

        }, (error)=>{
            console.log(error);
        })
    };
});