const EducationModel = require('../model/education')

const getAllEducation = async (req, res) => {
    try {
        const [data] = await EducationModel.getAllEducation();
        res.json({
            message: 'Get All Employee Education Success',
            data: data
        });    
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}

const getEducation = async (req, res) => {
    const {employeeEducationId} = req.params
    try {
        const [data] = await EducationModel.getEducation(employeeEducationId);
        res.json({
            message: 'Get Employee Education Success',
            data: data
        });    
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}

const createNewEducation = async (req, res) => {
    const {body} = req;    
    
    if(!body.employee_id || !body.name || !body.level || !body.description){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    
    try {
        await EducationModel.createNewEducation(body);
        res.status(201).json({
            message: 'Create Employee Education Success',
            data: body
        });
    } catch(error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}

const updateEducation = async (req, res) => {
    const {employeeEducationId} = req.params
    const {body} = req
    
    if(!body.employee_id || !body.name || !body.level || !body.description){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    try {
        await EducationModel.updateEducation(employeeEducationId, body);
        res.json({
            message: 'Update Employee Education Success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};

const deleteEducation = async (req, res) => {
    const {employeeEducationId} = req.params
    try {
        await EducationModel.deleteEducation(employeeEducationId);
        res.json({
            message: 'Delete Employee Education Success',
            data: null
        });    
    } catch(error) {
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};

module.exports = {
    getAllEducation,
    getEducation,
    createNewEducation,
    updateEducation,
    deleteEducation
}