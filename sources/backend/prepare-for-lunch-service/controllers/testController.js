import fs from 'fs';

const getAllDataInFile = (req, res) => {
  let rawdata = fs.readFileSync('./data/memberLunch.json');
  let student = JSON.parse(rawdata);
  return res.status(200).send(student);
};

const postDataIntoFile = (req, res) => {
  let data = JSON.stringify(req.body);
  fs.writeFileSync('./data/memberLunch.json', data);
  return res.status(200).send(data);
};

const dataLunch = { getAllDataInFile, postDataIntoFile };

export default dataLunch;
