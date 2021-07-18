import fs from 'fs';

const updateMultiWork = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);
    let dataReq = req.body;

    data.works = [...dataReq];

    fs.writeFileSync('./data/memberLunch.json', JSON.stringify(data));
    return res.status(200).send({ message: 'Success' });
};

const getAllWork = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);

    return res.status(200).send(data.works);
};

const work = {
    updateMultiWork,
    getAllWork,
};

export default work;
