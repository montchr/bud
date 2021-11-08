import type {Framework} from '@roots/bud-framework'
import type {Options as HtmlOptions} from 'html-webpack-plugin'

import {BudHtmlWebpackPlugin} from './html-webpack-plugin.extension'
import {BudInterpolateHtmlPlugin} from './interpolate-html-plugin.extension'

export interface template {
  (this: Framework, userOptions?: Options | boolean): Framework
}

/**
 * Template function options
 *
 * @public @config
 */
interface Options extends HtmlOptions {
  /**
   * Path to an HTML template to use. If none is supplied
   * one is provided as a default.
   */
  template?: string

  /**
   * Template variable names are used as keys.
   * Each key is associated with a replacement value.
   */
  replace?: {
    [key: string]: string
  }
}

/**
 * Enable and/or configure a generated HTML template
 *
 * @example
 *
 * ```ts
 * app.template()
 * ```
 *
 * With configuration defaults:
 *
 * ```ts
 * app.template({
 *   enabled: true,
 *   template: 'public/index.html',
 *   replace: {
 *     APP_NAME: name,
 *     APP_DESCRIPTION: description,
 *     PUBLIC_URL: app.env.get('PUBLIC_URL'),
 *   },
 * })
 * ```
 *
 * @public @config
 */
export const template: template = function (
  userOptions?: Options | boolean,
): Framework {
  /**
   * If there were no {@link Options} specified, we're done.
   */
  if (userOptions === false) {
    this.store.set('html', false)
    return this
  }
  this.store.set('html', true)

  /**
   * Add {@link BudHtmlWebpackPlugin} if it isn't already added
   */
  !this.extensions.has('html-webpack-plugin') &&
    this.extensions.add(BudHtmlWebpackPlugin)

  /**
   * Add {@link BudInterpolateHtmlPlugin} if it isn't already added
   */
  !this.extensions.has('interpolate-html-plugin') &&
    this.extensions.add(BudInterpolateHtmlPlugin)

  /**
   * If there were no {@link Options} specified, we're done.
   */
  if (!userOptions || userOptions === true) return this

  this.store.merge('extension.html-webpack-plugin', userOptions)

  if (!userOptions.replace) return this
  this.store.merge(
    'extension.interpolate-html-plugin',
    userOptions.replace,
  )

  return this
}