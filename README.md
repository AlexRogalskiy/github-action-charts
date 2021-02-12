# Graph charts

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub--charts-blue?logo=github)](https://github.com/marketplace/actions/styled-charts)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/15929/branches/326929/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=15929&bid=326929)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-charts)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-charts)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-charts?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-charts)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-charts)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-charts)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-charts)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-charts)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-charts/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-charts)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-charts)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-charts)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-charts?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-charts?branch=master/view?branch=master)
![CI](https://github.com/AlexRogalskiy/github-action-charts/workflows/CI/badge.svg)

<!--[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-charts/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexRogalskiy/github-action-charts)-->

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

## Description

Creates graph charts by input json data source and dimension parameters.

## Inputs

### `url`

**Required** Target url with json data source.

### `name`

**Optional** Graph chart name (default **demo**)

### `path`

**Optional** Graph chart path (default **images**)

### `width`

**Optional** Graph chart image width (default **1024**)

### `height`

**Optional** Graph chart image height (default **768**)

## Outputs

### `images`

Generated graph chart image (stored in the root directory)

## Examples

```yml
- name: Create graph charts
  uses: alexrogalskiy/github-action-charts@master
  with:
    url: 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json'
    name: 'chart'
    path: 'images'
    width: 400
    height: 400
```

## <img src="https://user-images.githubusercontent.com/18126719/56791599-0868f980-683a-11e9-8a8b-134ced040c8e.png" width="30" height="30"> _Star Gazers_

[![Stargazers repo roster for @AlexRogalskiy/github-action-charts](https://reporoster.com/stars/AlexRogalskiy/github-action-charts)](https://github.com/AlexRogalskiy/github-action-charts/stargazers)

## <img src="https://ghost.org/images/docs/setup/fork.gif" width="30" height="30"> _Forkers_

[![Forkers repo roster for @AlexRogalskiy/github-action-charts](https://reporoster.com/forks/AlexRogalskiy/github-action-charts)](https://github.com/AlexRogalskiy/github-action-charts/network/members)

[repo]: https://github.com/AlexRogalskiy/github-action-charts
[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-charts%26badge%3Dtrue
[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-charts+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-charts
[license_content]: https://github.com/AlexRogalskiy/github-action-charts/blob/master/LICENSE
