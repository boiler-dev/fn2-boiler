import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/fn2.ts",
    sourcePath: "tsignore/fn2.ts",
  })

  actions.push({
    action: "write",
    path: "test/fn2.spec.ts",
    sourcePath: "tsignore/fn2.spec.ts",
  })

  return actions
}
