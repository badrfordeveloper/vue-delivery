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
    'colis-id': RouteRecordInfo<'colis-id', '/colis/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'colis-add': RouteRecordInfo<'colis-add', '/colis/add', Record<never, never>, Record<never, never>>,
    'colis-list': RouteRecordInfo<'colis-list', '/colis/list', Record<never, never>, Record<never, never>>,
    'facture-livreur-id': RouteRecordInfo<'facture-livreur-id', '/factureLivreur/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'facture-livreur-list': RouteRecordInfo<'facture-livreur-list', '/factureLivreur/list', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'not-authorized': RouteRecordInfo<'not-authorized', '/not-authorized', Record<never, never>, Record<never, never>>,
    'ramassage-id': RouteRecordInfo<'ramassage-id', '/ramassage/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'ramassage-add': RouteRecordInfo<'ramassage-add', '/ramassage/add', Record<never, never>, Record<never, never>>,
    'ramassage-list': RouteRecordInfo<'ramassage-list', '/ramassage/list', Record<never, never>, Record<never, never>>,
    'retour-id': RouteRecordInfo<'retour-id', '/retour/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'retour-add': RouteRecordInfo<'retour-add', '/retour/add', Record<never, never>, Record<never, never>>,
    'retour-list': RouteRecordInfo<'retour-list', '/retour/list', Record<never, never>, Record<never, never>>,
    'retour-scan': RouteRecordInfo<'retour-scan', '/retour/scan', Record<never, never>, Record<never, never>>,
    'role-list': RouteRecordInfo<'role-list', '/role/list', Record<never, never>, Record<never, never>>,
    'second-page': RouteRecordInfo<'second-page', '/second-page', Record<never, never>, Record<never, never>>,
    'tarif-id': RouteRecordInfo<'tarif-id', '/tarif/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'tarif-add': RouteRecordInfo<'tarif-add', '/tarif/add', Record<never, never>, Record<never, never>>,
    'tarif-list': RouteRecordInfo<'tarif-list', '/tarif/list', Record<never, never>, Record<never, never>>,
    'user-id': RouteRecordInfo<'user-id', '/user/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'user-add': RouteRecordInfo<'user-add', '/user/add', Record<never, never>, Record<never, never>>,
    'user-list': RouteRecordInfo<'user-list', '/user/list', Record<never, never>, Record<never, never>>,
  }
}
