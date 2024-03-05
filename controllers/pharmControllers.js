import pharmaciesService from "../services/pharmService.js";

export const getPharmacies = async (req, res, next) => {
  try {
    const pharmList = await pharmaciesService.getPharmacies();
    res.send(pharmList);
  } catch (e) {
    next(e);
  }
};
