const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Darth',
      room: 'Test Room 1'
    },
    users.users = {
      id: '2',
      name: 'Obi-Wan',
      room: 'Test Room 2'
    },
    users.users = {
      id: '3',
      name: 'Emperor',
      room: 'Test Room 1'
    }]
  });

  it('should add new user', () =>{
    var users = new Users();
    var user = {
      id: '4',
      name: 'Luke',
      room: 'Test Room 3'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove user by id', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user if no id match', () => {
    var userId = '12';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);    
  });

  it('should find user by id', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user if no id match', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return user names for Test Room 1', () => {
    var userList = users.getUserList('Test Room 1');

    expect(userList).toEqual(['Darth', 'Emperor']);
  });

  it('should return user names for Test Room 2', () => {
    var userList = users.getUserList('Test Room 2');

    expect(userList).toEqual(['Obi-Wan']);
  });

});
