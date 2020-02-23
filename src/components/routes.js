import Loadable from './Loadable';

const Topics = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ './Topics')
});

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './About')
});

const routes = [
    {
        path: '/topics',
        component: Topics,
        key: 'topicsa'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    }
];

export default routes;
