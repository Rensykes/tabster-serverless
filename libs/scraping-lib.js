const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://tabs.ultimate-guitar.com/tab/angels_airwaves/do_it_for_me_now_chords_841005';

rp(url)
  .then(function(html){
    //console.log(html);
    var $ = cheerio.load(html);
    var found = $('*:contains("window.UGAPP.store.page")');
    var extraction = found['2'].children[0].data;
    
    let regex = '^\s*window\.UGAPP\.store\.page\s*=\s*({.*?})\s*;\s*$';
    //let match = regex.(extraction);
    console.log(extraction);
    console.log(extraction.match('^\s*window\.UGAPP\.store\.page\s*=\s*({.*?})\s*;\s*$'));
  })
  .catch(function(err){
    //handle error
    console.log('errore' + err);
  });