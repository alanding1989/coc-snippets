/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Qiming Zhao <chemzqm@gmail> (https://github.com/chemzqm)
*******************************************************************/
import { Range } from 'vscode-languageserver-types'

export enum TriggerKind {
  LineBegin,
  WordBoundary,
  InWord,
}

export interface UltiSnipsConfig {
  enable: boolean
  usePythonx: boolean
  pythonVersion: number
  directories: string[]
  extends: { [key: string]: string[] }
}

export interface UltiSnipsFile {
  directory: string
  filetype: string
  filepath: string
  snippets: Snippet[]
  extendFiletypes: string[]
  pythonCode?: string
}

export interface Snippet {
  readonly filepath: string
  readonly lnum: number
  readonly body: string
  readonly prefix: string
  readonly description: string
  readonly triggerKind: TriggerKind
  readonly priority?: number
  // prefix is expression
  readonly regex?: RegExp
  readonly autoTrigger?: boolean
  provider?: string
}

export interface GlobalContext {
  filepath: string
  visualText?: string
}

export interface SnippetEdit {
  range: Range
  prefix: string
  newText: string
  location: string
  description: string
}

export interface FileItem {
  directory: string
  filetype: string
  filepath: string
}

export interface ReplaceItem {
  index: number
  length: number
  newText: string
}
