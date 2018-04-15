describe('tableController', function () {
    var scope, createController, mockedData;

    beforeEach(angular.mock.module('jsonTableModule'));
    beforeEach(
        angular.mock.inject(function ($rootScope, $controller) {

            scope = $rootScope.$new(); 

            createController = function () {
                return $controller('tableController', {
                    '$scope': scope
                });
            };

            mockedData = [{
                "userId": 4,
                "id": 2,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 3,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 2,
                "id": 1,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 8,
                "id": 4,
                "title": "aa et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 9,
                "id": 5,
                "title": "nesciunt quas odio",
                "body": "zzz zzzzz bbbb"
            }]; 
        }));

    it('sorts data by userId ascending', function () {
        var controller = createController();
        scope.rows = mockedData;
        scope.sortBy('userId');
        expect(scope.rows[0].userId).toBe(2);
    });

    
    it('sorts data  by id ascending', function () {
        var controller = createController();
        scope.rows = mockedData;
        scope.sortBy('id');
        expect(scope.rows[0].id).toBe(1);
    });

    
    it('sorts data  by title ascending', function () {
        var controller = createController();
        scope.rows = mockedData;
        scope.sortBy('title');
        expect(scope.rows[0].title).toBe('aa et est occaecati');
    });

    
    it('sorts data by body descending', function () {
        var controller = createController();
        scope.rows = mockedData;
        scope.sortBy('body');
        scope.sortBy('body');
        expect(scope.rows[0].body).toBe('zzz zzzzz bbbb');
    });

});
