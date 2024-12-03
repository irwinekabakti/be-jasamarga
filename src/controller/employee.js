const EmployeeModel = require('../model/employee')

const getAllEmployee = async (req, res) => {
    try{
        const [data] = await EmployeeModel.getAllEmployee();
        res.json({
            message: 'Get All Employee Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const getEmployee = async (req, res) => {
    const {employeeId} = req.params
    try{
        const [data] = await EmployeeModel.getEmployee(employeeId);
        res.json({
            message: 'Get Employee Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const createNewEmployee = async (req, res) => {
    const {body} = req;
    
    if(!body.nik || !body.name || !body.is_active || !body.start_date || !body.end_date){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }    
    
    try{
        await EmployeeModel.createNewEmployee(body);
        res.status(201).json({
            message: 'Create Employee Success',
            data: body
        });
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const updateEmployee = async (req, res) => {
    const {employeeId} = req.params
    const {body} = req
    
    if(!body.nik || !body.name || !body.is_active || !body.start_date || !body.end_date){
        return res.status(400).json({
            message: 'Please fill required data'
        });
    }
    
    try{
        await EmployeeModel.updateEmployee(employeeId, body);
        res.json({
            message: 'Update Employee Success',
            data: body
        });
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
};
const deleteEmployee = async (req, res) => {
    const {employeeId} = req.params
    try{
        await EmployeeModel.deleteEmployee(employeeId);
        res.json({
            message: 'Delete Employee Success',
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
    getAllEmployee,
    getEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}