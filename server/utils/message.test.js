const expect = require('expect');

var {generateMessage} = require('./message');

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
