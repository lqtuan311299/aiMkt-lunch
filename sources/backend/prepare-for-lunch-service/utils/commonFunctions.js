const testRouter = (req, res) =>{
    return res.status(200).json({
        message: "Test success !"
    })
}

export {testRouter };