export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"test",
				"chore",
				"perf",
				"ci",
				"build",
				"revert",
			],
		],
		"subject-max-length": [2, "always", 100],
		"subject-case": [2, "always", "lower-case"],
		"scope-case": [2, "always", "lower-case"],
		"subject-full-stop": [0, "never"],
		"subject-empty": [2, "never"],
	},
};
