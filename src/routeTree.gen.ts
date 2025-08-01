/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as HomeRouteImport } from './routes/Home'

const HomeRoute = HomeRouteImport.update({
  id: '/Home',
  path: '/Home',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/Home': typeof HomeRoute
}
export interface FileRoutesByTo {
  '/Home': typeof HomeRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/Home': typeof HomeRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/Home'
  fileRoutesByTo: FileRoutesByTo
  to: '/Home'
  id: '__root__' | '/Home'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  HomeRoute: typeof HomeRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/Home': {
      id: '/Home'
      path: '/Home'
      fullPath: '/Home'
      preLoaderRoute: typeof HomeRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  HomeRoute: HomeRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
