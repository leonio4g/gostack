const express = require('express');

const server = express();
server.use(express.json());
let cont = 0; 
const projects = [];

function checkProjectsId (req, res, next){
  const {id} = req.params;

  if(!id){
    return res.status(400).json({error:'Projects id does not exist'});
  }
  return next();
};

function contRequest (req, res, next) {
  cont ++;
  console.log(`Numero de Requisições: ${cont}`);
  return next();
};

function idExists (req, res, next){
  const {id} = req.body;
    const idExist = projects.find(e => e.id == id);
  if(idExist){
    return res.status(400).json({error: 'Projects id already exists'})
  }
  return next();

}

server.post('/projects',idExists, contRequest,(req, res) =>{
  const {id, title} = req.body;
  const project = {
    id,
    title,
    tasks:[]
  }
  projects.push(project);
  return res.json(project);
});

server.get('/projects',contRequest, (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id',checkProjectsId, contRequest,(req, res) => {
      const {id} = req.params;
      const {title} = req.body;

      const project = projects.find(e => e.id == id);
      project.title = title;

      return res.json(projects);
});

server.delete('/projects/:id', contRequest,checkProjectsId,(req, res) => {
  const {id} = req.params;
  const projectId = projects.findIndex(e => e.id == id);

  projects.splice(projectId, 1);

  return res. send();
});

server.post('/projects/:id/tasks',checkProjectsId,contRequest, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;

  const project = projects.find(e => e.id == id);

  project.tasks.push(title);

  return res.json(projects);
})


server.listen(3232);