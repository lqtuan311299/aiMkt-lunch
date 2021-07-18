import fs from 'fs';
import { getRandomInt, uuidv4 } from '../utils/commonFunctions';

const buildOrderWork = function (works) {
    let orderWork = [];
    for (let i = 0; i < works.length; i++) {
        const element = works[i];
        for (let index = 0; index < element.workCount; index++) {
            const work = element;
            const { workName } = work;
            orderWork.push({
                workName,
            });
        }
    }
    return orderWork;
};

const createOrder = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);

    let id = uuidv4();

    let { works, users } = { ...data };

    users = users.filter((user) => user.status == 1 && user.gender == 1);

    let newOrder = {
        orderId: id,
        orderName: req.body.orderName,
        message: req.body.message,
        createdDate: Date.now(),
    };

    console.log(req);

    let worksOrder = buildOrderWork(works);

    worksOrder.forEach((workOrder) => {
        //Gán random người chưa có việc vào công việc
        let _usersNotAssign = users.filter((user) =>
            worksOrder.every((work) => work.assignTo != user.shortName)
        );

        let _randomUserIndex = getRandomInt(_usersNotAssign.length);
        workOrder.assignTo = _usersNotAssign[_randomUserIndex]?.shortName;
    });

    newOrder.works = worksOrder;

    data.orders.push(newOrder);

    fs.writeFileSync('./data/memberLunch.json', JSON.stringify(data));

    //Xóa nếu lớn hơn 30
    if (data.orders.length > 30) data.orders.shift();

    return res.status(200).send({ message: 'Success', id: id });
};

const getAllOrder = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);
    let response = data.orders.sort((a, b) => b.createdDate - a.createdDate);
    return res.status(200).send(response);
};

const getOneOrder = (req, res) => {
    let rawdata = fs.readFileSync('./data/memberLunch.json');
    let data = JSON.parse(rawdata);
    let id = req.params.orderId;

    let response = data.orders.find((order) => order.orderId == id);
    return res.status(200).send(response);
};

const updateOneOrder = (req, res) => {};

const deleteOneOrder = (req, res) => {};

const order = {
    createOrder,
    getAllOrder,
    updateOneOrder,
    deleteOneOrder,
    getOneOrder,
};

export default order;
