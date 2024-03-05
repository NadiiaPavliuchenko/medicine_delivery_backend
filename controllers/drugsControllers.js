import drugsService from "../services/drugsService.js";

export const getDrugs = async (req, res, next) => {
  try {
    const drugsList = await drugsService.getDrugs();
    res.send(drugsList);
  } catch (e) {
    next(e);
  }
};

export const getDrugsByPharmacy = async (req, res, next) => {
  try {
    const drugsList = await drugsService.getDrugsByPharmacy(req.params.id);
    if (drugsList === null) {
      return res.status(404).send("Not found");
    }
    res.send(drugsList);
  } catch (e) {
    next(e);
  }
};
