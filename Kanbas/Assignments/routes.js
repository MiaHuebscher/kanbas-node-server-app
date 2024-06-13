import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findAllCourseAssignments = async (req, res) => {
    const assignments = await dao.findAllCourseAssignments(req.params.cid);
    res.json(assignments);
  };
  app.get("/api/courses/:cid/assignments", findAllCourseAssignments);

  const createAssignment = async (req, res) => {
    const newAssignment = {
      ...req.body,
      course: req.params.cid,
      _id: new Date().getTime().toString(),
    };
    const assignment = await dao.createAssignment(newAssignment);
    res.json(assignment);
  };
  app.post("/api/courses/:cid/assignments", createAssignment);

  const deleteAssignment = async (req, res) => {
    const status = await dao.deleteAssignment(req.params.aid);
    res.json(status);
  };
  app.delete("/api/assignments/:aid", deleteAssignment)

  const updateAssignment = async (req, res) => {
    const status = await dao.updateAssignment(req.params.aid, req.body);
    res.json(status);
  };
  app.put("/api/assignments/:aid", updateAssignment);
}





