import fs from 'fs';

const createMember = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);
    let typeCreate = req.params.shortName;
    let dataReq = req.body;
    if (typeCreate === 'multi') {
        for (let mem of dataReq) {
            let dataNew = {
                shortName: mem.shortName,
                name: mem.name,
                status: 1,
                gender: mem.gender,
            };
            data.users.push(dataNew);
        }
    } else {
        let dataNew = {
            shortName: dataReq.shortName,
            name: dataReq.name,
            status: 1,
            gender: dataReq.gender,
        };
        data.users.push(dataNew);
    }
    fs.writeFileSync('./data/memberLunch.json', JSON.stringify(data));
    return res.status(200).send(data);
};

const getAllMember = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);

    let response = data.users;

    return res.status(200).send(response);
};

const updateMultiMember = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);
    let dataReq = req.body;

    data.users = [...dataReq];

    fs.writeFileSync('./data/memberLunch.json', JSON.stringify(data));
    return res.status(200).send(data.users);
};

const deleteMultiMember = (req, res) => {};

const member = {
    createMember,
    getAllMember,
    updateMultiMember,
    deleteMultiMember,
};

export default member;
