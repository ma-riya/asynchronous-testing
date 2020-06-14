const googleSearch = require('./script');

dbMock = [
    'dog',
    'cheesepuff.com',
    'dispay.com',
    'dogpictures.com'
]

it('this is a test', () => {
   googleSearch('testtest', dbMock);
})