import './css/style.css';
import { loadData } from './components/statusUpdate';
import createList from './components/createList';
import { runList } from './components/crudList';

const run = () => {
  loadData();
  createList();
  runList();
};

run();