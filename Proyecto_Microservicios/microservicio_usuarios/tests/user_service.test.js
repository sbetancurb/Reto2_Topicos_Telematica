// user_service.test.js
const UserService = require('../app/services/user_service');
const UserModel = require('../app/models/user_model');

describe('UserService', () => {
    let userService;

    beforeAll(() => {
        userService = new UserService();
    });

    it('should register a new user', () => {
        const userData = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'securepassword'
        };

        const newUser = userService.registerUser(userData);

        expect(newUser).toBeInstanceOf(UserModel);
        expect(newUser.username).toBe(userData.username);
        expect(newUser.email).toBe(userData.email);
        expect(newUser.password).toBe(userData.password);
    });

    it('should get a user by username', () => {
        const username = 'testuser';
        const user = userService.getUserByUsername(username);

        expect(user).toBeInstanceOf(UserModel);
        expect(user.username).toBe(username);
    });

    it('should return null when getting a non-existing user', () => {
        const username = 'nonexistentuser';
        const user = userService.getUserByUsername(username);

        expect(user).toBeNull();
    });
});