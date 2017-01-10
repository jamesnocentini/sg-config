var yaml = require('js-yaml')
  , outputfile = 'src/output.json'
  , fs = require('fs')
  , obj = yaml.load(fs.readFileSync('config.yaml', {encoding: 'utf-8'}));

fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
