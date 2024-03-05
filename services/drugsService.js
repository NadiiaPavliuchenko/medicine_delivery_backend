import { drugs } from "../models/drugsModel.js";

const getDrugs = async () => {
  const drugsList = await drugs.find({});
  return drugsList;
};

const getDrugsByPharmacy = async (pharmacy) => {
  const drugsList = await drugs.find({ pharmacy });
  if (!drugsList || drugsList.length === 0) {
    return null;
  }
  return drugsList;
};

export default { getDrugs, getDrugsByPharmacy };
