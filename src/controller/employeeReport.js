const EmployeeDataModel = require('../model/employeeReport')

const getEmployeeReport = async (req, res) => {
    try{
        const [data] = await EmployeeDataModel.getEmployeeReport();
        res.json({
            message: 'Employee Report Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Internal Server Error',
            serverMessage: error
        });
    }
}
const getEmployeeData = async (req, res) => {
    const {employeeId} = req.params
    try{
        const [data] = await EmployeeDataModel.getEmployeeData(employeeId);
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

module.exports = {
    getEmployeeReport,
    getEmployeeData
}