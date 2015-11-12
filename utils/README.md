# utils

Some cli tools.

## upd-changelog

Appends all commit messages since the last release (`latest tag`) to a CHANGELOG.md file (will be created if not yet existing).  
Currently requires an active branch for the release to be made (according to `git-flow`, e.g. `release/v1.2.3`).
