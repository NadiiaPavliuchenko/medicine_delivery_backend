import { drugs } from "../models/drugsModel.js";

const getDrugs = ({ price, dateAdded }) => {
  const drugsList = drugs.find({});
  if (price) {
    drugsList.sort({ price });
  }
  if (dateAdded) {
    drugsList.sort({ dateAdded });
  }
  drugsList.sort("-favorite");
  return drugsList;
};

const getDrugsByPharmacy = (pharmacy, { price, dateAdded }) => {
  const drugsList = drugs.find({ pharmacy });
  if (!drugsList || drugsList.length === 0) {
    return null;
  }
  if (price) {
    drugsList.sort({ price });
  }
  if (dateAdded) {
    drugsList.sort({ dateAdded });
  }
  drugsList.sort("-favorite");
  return drugsList;
};

const updateDrugStatus = async (_id, { favorite }) => {
  const newDrug = {
    favorite,
  };
  const drug = await drugs.findByIdAndUpdate(_id, newDrug, {
    new: true,
  });
  if (!drug) {
    return null;
  } else {
    return drug;
  }
};

export default { getDrugs, getDrugsByPharmacy, updateDrugStatus };
