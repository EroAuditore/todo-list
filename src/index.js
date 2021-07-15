import './css/style.css';
import { loadData } from './components/statusUpdate';
import createList from './components/createList';

const run = () => {
  loadData();
  createList();
};

run();