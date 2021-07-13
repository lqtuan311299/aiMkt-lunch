const test = (req, res) => {
    return res.status(200).json({
        message: "Test success !"
    })
}

const testController = {test}

export default testController;