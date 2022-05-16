# Test Vale

Vale is a command-line tool that brings code-like linting to prose.

The [Google Style Guide](https://github.com/errata-ai/Google) has been used

Configuration can be set in the `.vale.ini` file, styles can be added to `.github/styles`

A Github workflow has been setup to :

1. Identify the [changed](https://github.com/tj-actions/changed-files) files (New additions and modifications made to files)
2. Run Vale on `.rst` files. (Currently `test.rst`, `sample.rst` have erroneous text)
3. Report errors, suggestions and warnings
4. The action [fails](https://github.com/Namyalg/vale-boilerplate/runs/6222910640?check_suite_focus=true) if there are errors
