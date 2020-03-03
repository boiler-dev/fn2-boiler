import { GenerateBoiler } from "boiler-dev"
import { join } from "path"

export const generate: GenerateBoiler = async ({
  cwdPath,
  files,
}) => {
  const actions = []

  for (const file of files) {
    const { name, source } = file

    if (name === "fn2.ts") {
      actions.push({
        action: "write",
        path: join(cwdPath, "src", name),
        source,
      })
    }

    if (name === "fn2.spec.ts") {
      actions.push({
        action: "write",
        path: join(cwdPath, "test", name),
        source,
      })
    }
  }

  return actions
}
