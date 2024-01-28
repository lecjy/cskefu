import { RouteRecordRaw } from 'vue-router'
import { ROUTE_NAME } from '@cskefu/models'

import Layout from '../layouts/MenusLayout.vue'
import {
  BeakerOutline,
  CallOutline,
  ChatboxEllipsesOutline,
  ClipboardOutline,
  FootballOutline,
  IdCardOutline,
  InfiniteSharp,
  LayersOutline,
  // NotificationsOutline,
  PlanetOutline,
} from '@vicons/ionicons5'

const routes: RouteRecordRaw[] = [
  {
    path: '/system',
    name: ROUTE_NAME.SYSTEM_INDEX,
    component: Layout,
    redirect: { name: ROUTE_NAME.SYSTEM_INFO_INDEX },
    children: [
      {
        path: 'index',
        name: ROUTE_NAME.SYSTEM_INFO_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '系统信息',
          requiresAuth: true,
          icon: InfiniteSharp,
        },
      },
      {
        path: 'authenticator',
        name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_INDEX,
        component: () => import('../views/AuthenticatorView.vue'),
        meta: {
          title: '认证登录',
          requiresAuth: true,
          icon: IdCardOutline,
        },
        redirect: { name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_USERS_INDEX },
        children: [
          {
            path: 'users',
            name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_USERS_INDEX,
            component: () =>
              import('../views/pages/authenticator/AuthenticatorUsersView.vue'),
          },
          {
            path: 'methods',
            name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_METHODS_INDEX,
            component: () =>
              import(
                '../views/pages/authenticator/AuthenticatorMethodsView.vue'
              ),
          },
          {
            path: 'template',
            name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_TEMPLATE_INDEX,
            component: () =>
              import(
                '../views/pages/authenticator/AuthenticatorTemplateView.vue'
              ),
          },
          {
            path: 'setting',
            name: ROUTE_NAME.SYSTEM_AUTHENTICATOR_SETTING_INDEX,
            component: () =>
              import(
                '../views/pages/authenticator/AuthenticatorSettingView.vue'
              ),
          },
        ],
      },
      {
        path: 'oss',
        name: ROUTE_NAME.SYSTEM_OSS_INDEX,
        component: () => import('../views/OSSView.vue'),
        meta: {
          title: '对象存储设置',
          requiresAuth: true,
          icon: LayersOutline,
        },
      },
      {
        path: 'cdn',
        name: ROUTE_NAME.SYSTEM_CDN_INDEX,
        component: () => import('../views/CDNView.vue'),
        meta: {
          title: 'CDN 设置',
          requiresAuth: true,
          icon: PlanetOutline,
        },
      },
      {
        path: 'sms',
        name: ROUTE_NAME.SYSTEM_SMS_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '短信平台设置',
          requiresAuth: true,
          icon: ChatboxEllipsesOutline,
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'call',
        name: ROUTE_NAME.SYSTEM_CALL_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '呼叫平台设置',
          requiresAuth: true,
          icon: CallOutline,
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'gpt',
        name: ROUTE_NAME.SYSTEM_GPT_INDEX,
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'GPT 设置',
          requiresAuth: true,
          icon: BeakerOutline,
          comingSoon: true,
          disabled: true,
        },
      },
      {
        path: 'source',
        name: ROUTE_NAME.SYSTEM_SOURCE_INDEX,
        component: () => import('../views/MetaDataView.vue'),
        meta: {
          title: '元数据',
          requiresAuth: true,
          icon: FootballOutline,
        },
      },
      // {
      //   path: 'notification',
      //   name: ROUTE_NAME.SYSTEM_NOTIFICATION_INDEX,
      //   component: () => import('../views/NotificationView.vue'),
      //   meta: {
      //     title: '通知设置',
      //     requiresAuth: true,
      //     icon: NotificationsOutline,
      //   },
      // },
      {
        path: 'log',
        name: ROUTE_NAME.SYSTEM_LOG_INDEX,
        component: () => import('../views/LogView.vue'),
        meta: {
          title: '日志查看',
          requiresAuth: true,
          icon: ClipboardOutline,
        },
      },
    ],
  },
]

export default routes