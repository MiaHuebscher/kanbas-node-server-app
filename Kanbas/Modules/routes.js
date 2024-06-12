import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findAllCourseModules = async (req, res) => {
    const modules = await dao.findAllCourseModules(req.params.cid);
    res.json(modules);
  };
  app.get("/api/courses/:cid/modules", findAllCourseModules);

  const createModule = async (req, res) => {
    const newModule = {
      ...req.body,
      course: req.params.cid,
      _id: new Date().getTime().toString(),
    };
    const module = await dao.createModule(newModule);
    res.json(module);
  };
  app.post("/api/courses/:cid/modules", createModule);

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  app.delete("/api/modules/:mid", deleteModule);

  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.mid, req.body);
    res.json(status);
  };
  app.put("/api/modules/:mid", updateModule);
}

