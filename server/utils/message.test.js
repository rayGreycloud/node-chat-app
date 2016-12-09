const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Darth';
    var text = 'Embrace your destiny';
    var res = generateMessage(from, text);

    // expect(res.from).toEqual(from);
    // expect(res.text).toEqual(text);
    expect(res).toInclude({ from, text });
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Anakin';
    var latitude = 47.656322;
    var longitude = -122.315888;
    var url = 'https://www.google.com/maps?q=47.656322,-122.315888';
    var res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({ from, url });
    expect(res.createdAt).toBeA('number');
  });
});
