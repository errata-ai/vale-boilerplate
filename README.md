# Test Vale

A Github workflow has been setup to :

1. Identify the [changed](https://github.com/tj-actions/changed-files) files (New additions and modifications made to files)
2. Run Vale on `.rst` files. (Currently `test.rst` has erroneous text)
3. Report errors, suggestions and warnings
4. The action [fails](https://github.com/Namyalg/vale-boilerplate/runs/6222910640?check_suite_focus=true) if there are errors
