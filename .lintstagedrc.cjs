const path = require('path')

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const buildPrettierCommand = (filenames) =>
	`prettier --write --ignore-path .gitignore . --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
}
