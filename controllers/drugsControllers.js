import drugsService from "../services/drugsService.js";

export const getDrugs = async (req, res, next) => {
  try {
    const price = req.query.price;
    if (price === "") {
      res.status(404).send("Not found");
    }
    const dateAdded = req.query.date;
    if (dateAdded === "") {
      res.status(404).send("Not found");
    }
    const drugsList = await drugsService.getDrugs({ price, dateAdded });
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

export const updateDrugStatus = async (req, res, next) => {
  try {
    const updatedDrug = await drugsService.updateDrugStatus(
      req.params.id,
      req.body
    );
    if (updatedDrug === null) {
      return res.status(404).send("Not found");
    }
    res.send(updatedDrug);
  } catch (e) {
    next(e);
  }
};
