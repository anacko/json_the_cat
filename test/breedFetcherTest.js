const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  
  it('returns error of invalid breed for invalid breed inserted, via callback', (done) => {
    fetchBreedDescription('Siberianx', (err, desc) => {
      // compare returned error
      const expectedErr = "Breed not available. For a list, use list.";
      assert.equal(expectedErr, err);

      // we expect no description for this scenario
      assert.equal(null, desc);

      done();
    });
  });
  
  it('returns error of invalid input for no breed inserted, via callback', (done) => {
    fetchBreedDescription('', (err, desc) => {
      // compare returned error
      const expectedErr = "Invalid input. For a list of available breeds, use list.";
      assert.equal(expectedErr, err);

      // we expect no description for this scenario
      assert.equal(null, desc);

      done();
    });
  });
  
  it('returns list of valid breeds, via callback', (done) => {
    fetchBreedDescription('list', (err, desc) => {
      // compare returned error
      assert.equal(null, err);

      // we expect no description for this scenario
      const expectedDesc = [
        'abyssinian',           'aegean',               'american bobtail',
        'american curl',        'american shorthair',   'american wirehair',
        'arabian mau',          'australian mist',      'balinese',
        'bambino',              'bengal',               'birman',
        'bombay',               'british longhair',     'british shorthair',
        'burmese',              'burmilla',             'california spangled',
        'chantilly-tiffany',    'chartreux',            'chausie',
        'cheetoh',              'colorpoint shorthair', 'cornish rex',
        'cymric',               'cyprus',               'devon rex',
        'donskoy',              'dragon li',            'egyptian mau',
        'european burmese',     'exotic shorthair',     'havana brown',
        'himalayan',            'japanese bobtail',     'javanese',
        'khao manee',           'korat',                'kurilian',
        'laperm',               'maine coon',           'malayan',
        'manx',                 'munchkin',             'nebelung',
        'norwegian forest cat', 'ocicat',               'oriental',
        'persian',              'pixie-bob',            'ragamuffin',
        'ragdoll',              'russian blue',         'savannah',
        'scottish fold',        'selkirk rex',          'siamese',
        'siberian',             'singapura',            'snowshoe',
        'somali',               'sphynx',               'tonkinese',
        'toyger',               'turkish angora',       'turkish van',
        'york chocolate'
      ]
      assert.deepEqual(expectedDesc, desc);

      done();
    });
  });

});