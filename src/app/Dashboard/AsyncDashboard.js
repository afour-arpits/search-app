import Loadable from 'react-loadable';
import Loading from '../Components/Loading/Loading'
const fn = () => import('./Dashboard');

const AsyncDashboard = Loadable({
  loader: fn,
  loading: Loading
});

export default AsyncDashboard;