const EmployeeProfileModel = require('../model/employeeProfile')

const getAllEmployeeProfile = async (req, res) => {
    try{
        const [data] = await EmployeeProfileModel.getAllEmployeeProfile();
        res.json({
            message: 'Get All Employee Profile Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const getEmployeeProfile = async (req, res) => {
    const {employeeProfileId} = req.params
    
    try{
        const [data] = await EmployeeProfileModel.getEmployeeProfile(employeeProfileId);
        res.json({
            message: 'Get Employee Profile Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const createNewEmployeeProfile = async (req, res) => {
    const {body} = req;
    
    if(!body.employee_id || !body.place_of_birth || !body.date_of_birth || !body.gender || !body.is_married){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }   
    
    try{
        await EmployeeProfileModel.createNewEmployeeProfile(body);
        res.status(201).json({
            message: 'Create Employee Profile Success',
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const updateEmployeeProfile = async (req, res) => {
    const {employeeProfileId} = req.params
    const {body} = req
    
    if(!body.employee_id || !body.place_of_birth || !body.date_of_birth || !body.gender || !body.is_married){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    try{
        await EmployeeProfileModel.updateEmployeeProfile(employeeProfileId, body);
        res.json({
            message: 'Update Employee Profile Success',
            data: body
        });
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};
const deleteEmployeeProfile = async (req, res) => {
    const {employeeProfileId} = req.params
    try{
        await EmployeeProfileModel.deleteEmployeeProfile(employeeProfileId);
        res.json({
            message: 'Delete Employee Profile Success',
            data: null
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};

module.exports = {
    getAllEmployeeProfile,
    getEmployeeProfile,
    createNewEmployeeProfile,
    updateEmployeeProfile,
    deleteEmployeeProfile
}