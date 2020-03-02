import {
  InstallBoiler,
  PromptBoiler,
  GenerateBoiler,
  UninstallBoiler,
} from "boiler-dev"

export const install: InstallBoiler = async ({
  files,
  rootDirPath,
}) => {}

export const prompt: PromptBoiler = async ({
  files,
  rootDirPath,
}) => {
  const prompts = []
  return prompts
}

export const generate: GenerateBoiler = async ({
  answers,
  files,
  rootDirPath,
}) => {
  const actions = []
  return actions
}

export const uninstall: UninstallBoiler = async ({
  answers,
  files,
  rootDirPath,
}) => {}
