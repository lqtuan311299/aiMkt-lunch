import fs from 'fs';

const createOrder = (req, res) => {
  let rawdata = fs.readFileSync('./data/memberLunch.json');
  let data = JSON.parse(rawdata);
  let orderId = req.params.orderId;
  let date = new Date();

  // số người lấy thức ăn
  // let memberGetFood = data.users.filter(
  //   (m) => m.status === 1 && m.gender === 1
  // );

  // số người đi làm
  let sumMemberEat = data.users.filter((m) => m.status === 1).length;
  console.log(memberGetFood, sumMemberEat);
  if (orderId === 'multi') {
  } else {
    let dataNew = {
      orderId: data.orders.length + 1,
      orderName: `Ngày ${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      message: 'Các chị em ra giữ chỗ...',
      createdDate: `${date.getTime()}`,
      works: [
        // {
        //   workName: '50% đũa',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% đũa',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% thìa',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% thìa',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Dưa cà',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Dưa cà',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Mắm',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Mắm',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Lạc',
        //   assignTo: '',
        // },
        // {
        //   workName: '50% Lạc',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Cơm',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Cơm',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Cơm',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Cơm',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Canh',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Canh',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Canh',
        //   assignTo: '',
        // },
        // {
        //   workName: '25% Canh',
        //   assignTo: '',
        // },
      ],
    };
    data.orders.push(dataNew);
  }
  if (data.orders.length > 30) {
    data.orders.splice(0, 1);
  }
  fs.writeFileSync('./data/memberLunch.json', JSON.stringify(data));
  return res.status(200).send(data);
};

const getAllOrder = (req, res) => {
  let rawdata = fs.readFileSync('./data/memberLunch.json');
  let data = JSON.parse(rawdata);
  let response = data.orders;
  let orderId = req.params.orderId;
  if (orderId !== 'all') {
    orderId = parseInt(orderId);
    response = response.filter((order) => order.orderId === orderId);
  }
  return res.status(200).send(response);
};

const updateMultiOrder = (req, res) => {};

const deleteMultiOrder = (req, res) => {};

const order = {
  createOrder,
  getAllOrder,
  updateMultiOrder,
  deleteMultiOrder,
};

export default order;
