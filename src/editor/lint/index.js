import { linter } from '@codemirror/lint';
import { cmFeelersLinter } from './cmFeelersLinter.js';

export default linter(cmFeelersLinter());