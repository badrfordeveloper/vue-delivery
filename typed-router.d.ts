/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'role-list': RouteRecordInfo<'role-list', '/role/list', Record<never, never>, Record<never, never>>,
    'second-page': RouteRecordInfo<'second-page', '/second-page', Record<never, never>, Record<never, never>>,
    'user-id': RouteRecordInfo<'user-id', '/user/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'user-add': RouteRecordInfo<'user-add', '/user/add', Record<never, never>, Record<never, never>>,
    'user-addxx': RouteRecordInfo<'user-addxx', '/user/addxx', Record<never, never>, Record<never, never>>,
    'user-list': RouteRecordInfo<'user-list', '/user/list', Record<never, never>, Record<never, never>>,
  }
}
