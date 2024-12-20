export interface Route {
  path: string;
  name: string;
}

export const routes: Route[] = [
  { path: '/random', name: 'Random View' },
  { path: '/react-test', name: 'React Test' },
  { path: '/welcome', name: 'Welcome' },
];