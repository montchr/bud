/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import sh from '../sh'

export default Command =>
  class extends Command {
    static paths = [[`task`, `clean`]]

    static usage = {
      category: `task`,
      description: `Clean project of all built artifacts`,
      examples: [[`Clean`, `yarn task clean`]],
    }

    async execute() {
      const $ = sh.bind(this)

      await $([
        `rm -rf **/.budfiles`,
        `rm -rf **/node_modules`,
        `rm -rf examples/*/.budfiles`,
        `rm -rf examples/sage/public/*`,
        `rm -rf examples/sage/storage/bud/*`,
        `rm -rf examples/*/dist`,
        `rm -rf packages/*/*/lib`,
        `rm -rf packages/*/*/types`,
      ])

      await $([`yarn cache clean`])
    }
  }