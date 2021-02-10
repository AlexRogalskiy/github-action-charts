# Graph charts

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub--charts-blue?logo=github)](https://github.com/marketplace/actions/styled-charts)
<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-charts)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-charts)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-charts?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-charts)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-charts)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-charts)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-charts)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/github-action-charts)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-charts)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-charts/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-charts)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-charts)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-charts)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-charts?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-charts?branch=master/view?branch=master)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][1]
[![Public workflows that use this action.][2]][3]
[![Licence][4]][5]

## Description

Creates graph charts by input json data source.

## Inputs

### `url`

**Required** The url with json data source.

### `name`

**Optional** Graph chart name (default **demo**)

### `width`

**Optional** Graph chart image name width (default **1024**)

### `height`

**Optional** Graph chart image name height (default **768**)

## Outputs

### `images`

Generated graph chart image (stored in the root directory)

## Example usage

```yml
- name: Graph charts
  uses: alexrogalskiy/github-action-charts@master
  with:
    url: "https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json"
    name: "chart"
    width: 400
    height: 400
```

Running locally:

- `yarn run_action --action github-action-charts --url 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json' --name chart-name --width 400 --height 400`

[1]: https://github.com/AlexRogalskiy/github-action-charts
[2]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-charts%26badge%3Dtrue
[3]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-charts+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[4]: https://img.shields.io/github/license/AlexRogalskiy/github-action-charts
[5]: https://github.com/AlexRogalskiy/github-action-charts/blob/v3.x/LICENSE
