import {Extension} from '@roots/bud-framework/extension'
import {
  development,
  label,
  plugin,
} from '@roots/bud-framework/extension/decorators'
import Webpack from '@roots/bud-support/webpack'

/**
 * This is the extension that enables hot module replacement in `development` mode
 *
 * @public
 * @decorator `@label`
 * @decorator `@plugin`
 * @decorator `@development`
 */
@label(`@roots/bud-extensions/webpack-hot-module-replacement-plugin`)
@plugin(Webpack.HotModuleReplacementPlugin)
@development
export default class BudHMR extends Extension<
  {},
  Webpack.HotModuleReplacementPlugin
> {}