const { people } = require('../data');

module.exports.poeple_get = (req, res) => {
  res.status(200).json({ status: true, resultpunda: people });
};

module.exports.poeple_post = (req, res) => {
  const { name } = req.body;
  !name ? res.status(400).json({ success: false, msg: 'please provide name value' }) : res.status(201).json({ success: true, person: name });
};

module.exports.people_post_postman = (req, res) => {
  const { name } = req.body;
  !name ? res.status(400).json({ success: false, msg: 'please provide name value' }) : res.status(201).json({ success: true, data: [...people, name] });
};

module.exports.people_put = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const person = people.find(person => person.id === Number(id));
  const newPeple = people.map(person => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  !person ? res.status(404).json({ success: false, msg: `no person with id ${id} in the list` }) : res.status(201).json({ success: true, data: newPeple });
};

module.exports.people_delete = (req, res) => {
  const person = people.find(({ id }) => id === Number(req.params.id));
  const newPerson = people.filter(({ id }) => id !== Number(req.params.id));
  !person ? res.status(404).json({ success: false, msg: `no person with id ${req.params.id} in the list` }) : res.status(200).json({ success: true, data: newPerson });
};
