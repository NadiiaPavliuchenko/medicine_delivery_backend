import { pharmacy } from "../models/pharmaciesModel.js";

const getPharmacies = async () => {
  const pharmList = await pharmacy.find({});
  return pharmList;
};

export default { getPharmacies };
