import { lazy } from 'react';

interface Route {
  path: string;
  label: string;
  exact: boolean;
  public: boolean;
  component: any;
}

type Routes = Route[];

export const routes: Routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    public: true,
    component: lazy(
      () => import('../view/HomeViev' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/articles',
    label: 'Articles',
    exact: true,
    public: true,
    component: lazy(
      () =>
        import('../view/ArticlesView' /* webpackChunkName: "articles-view" */)
    ),
  },
  {
    path: '/articles/:articleId',
    label: 'ArticleDetail',
    exact: true,
    public: true,
    component: lazy(
      () =>
        import(
          '../view/ArticleDetailView' /* webpackChunkName: "article-detail-view" */
        )
    ),
  },
];
