const EmployeeFamilyModel = require('../model/employeeFamily')

const getAllEmployeeFamily = async (req, res) => {
    try{
        const [data] = await EmployeeFamilyModel.getAllEmployeeFamily();
        res.json({
            message: 'Get All Employee Family Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const getEmployeeFamily = async (req, res) => {
    const {employeeFamilyId} = req.params
    try{
        const [data] = await EmployeeFamilyModel.getEmployeeFamily(employeeFamilyId);
        res.json({
            message: 'Get Employee Family Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const createNewEmployeeFamily = async (req, res) => {
    const {body} = req;    
    
    if(!body.employee_id || !body.name || !body.identifier || !body.job || !body.place_of_birth || !body.date_of_birth || 
        !body.religion || !body.is_life || !body.is_divorced || !body.relation_status){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    try{
        await EmployeeFamilyModel.createNewEmployeeFamily(body);
        res.status(201).json({
            message: 'Create Employee Family Success',
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const updateEmployeeFamily = async (req, res) => {
    const {employeeFamilyId} = req.params
    const {body} = req
    if(!body.employee_id || !body.name || !body.identifier || !body.job || !body.place_of_birth || !body.date_of_birth || 
        !body.religion || !body.is_life || !body.is_divorced || !body.relation_status){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    try{
        await EmployeeFamilyModel.updateEmployeeFamily(employeeFamilyId, body);
        res.json({
            message: 'Update Employee Family Success',
            data: body
        });
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};
const deleteEmployeeFamily = async (req, res) => {
    const {employeeFamilyId} = req.params
    try{
        await EmployeeFamilyModel.deleteEmployeeFamily(employeeFamilyId);
        res.json({
            message: 'Delete Employee Family Success',
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
    getAllEmployeeFamily,
    getEmployeeFamily,
    createNewEmployeeFamily,
    updateEmployeeFamily,
    deleteEmployeeFamily
}