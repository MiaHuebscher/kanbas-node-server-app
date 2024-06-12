import model from "./model.js";

export const findAllCourseModules = (cid) => model.find({course: cid});
export const createModule = (module) => {
    return model.create(module);
};
export const deleteModule = (moduleId) => model.deleteOne({_id: moduleId});
export const updateModule = (moduleId, module) => model.updateOne({_id: moduleId}, {$set: module});