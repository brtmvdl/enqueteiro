const { Form, Answer } = require('../models');
const crypto = require('crypto');

exports.createForm = async (req, res) => {
  try {
    const { title, options } = req.body;
    const hash = crypto.randomBytes(8).toString('hex');
    const form = await Form.create({ title, options: JSON.stringify(options), hash });
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getForm = async (req, res) => {
  try {
    const form = await Form.findOne({ where: { hash: req.params.hash } });
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitAnswer = async (req, res) => {
  try {
    const form = await Form.findOne({ where: { hash: req.params.hash } });
    if (!form) return res.status(404).json({ error: 'Form not found' });
    
    await Answer.create({ 
      form_id: form.id, 
      answer: req.body.answer, 
      ip: req.ip 
    });
    
    res.status(201).json({ message: 'Answer submitted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
