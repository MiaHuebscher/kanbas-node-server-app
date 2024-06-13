import model from "./model.js";

export const findAllCourseAssignments = (cid) => model.find({course: cid});
export const createAssignment = (assignment) => {
    return model.create(assignment);
};
export const deleteAssignment = (assignmentId) => model.deleteOne({_id: assignmentId});
export const updateAssignment = (assignmentId, assignment) => model.updateOne({_id: assignmentId}, {$set: assignment});