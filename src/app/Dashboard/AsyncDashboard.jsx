import Loadable from 'react-loadable';
import Loading from '../Components/Loading/Loading.jsx'
const fn = () => import('./Dashboard.jsx');

const AsyncDashboard = Loadable({
  loader: fn,
  loading: Loading
});

export default AsyncDashboard;