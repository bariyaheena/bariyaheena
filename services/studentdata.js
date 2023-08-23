const student = require("../model/student");

const createstud = async (data)=>{

  const savedata = await student.create(data);
  return savedata
};
const findstud = async (query)=>{

  const existdata = await student.findOne(query);
  return existdata
};
const Deletestud = async (query,data)=>{

  const deleteData = await student.findOneAndDelete(query);
  return deleteData
};


module.exports={
  createstud,
  findstud,
  Deletestud
}