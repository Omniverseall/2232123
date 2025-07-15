// ИЗМЕНЕНИЕ: Убираем путь, так как .env теперь в корне проекта
require('dotenv').config(); 

// Отладочные строки остаются для проверки
console.log('Загруженный MONGO URI:', process.env.MONGO_URI);
console.log('Загруженный JWT Secret:', process.env.JWT_SECRET);

const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Используем переменную из .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB подключена успешно.'))
  .catch(err => console.error('Ошибка подключения к MongoDB:', err));


const User = mongoose.model('User', {
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// Регистрация
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Пожалуйста, введите все поля' });
    }
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: 'Этот email уже занят' });
    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hash });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, email } });
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    res.status(500).json({ msg: 'Внутренняя ошибка сервера' });
  }
});

// Вход
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Неверный email или пароль' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ msg: 'Неверный email или пароль' });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, email } });
  } catch (error) {
    console.error('Ошибка входа:', error);
    res.status(500).json({ msg: 'Внутренняя ошибка сервера' });
  }
});

app.listen(5000, () => console.log('Server on http://localhost:5000'));