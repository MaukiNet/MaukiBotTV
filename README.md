[discord-invite]: https://discord.gg/7fVXR2g7DG

[maven-central]: https://img.shields.io/badge/Version-v1.3.0.BETA-blue.svg
[discord-shield]: https://discord.com/api/guilds/859073652775059457/widget.png

[license]: https://github.com/MaukiNet/MaukiBotTV/blob/main/LICENSE
[license-shield]: https://img.shields.io/badge/License-GPL3.0-green.svg

[version]: https://img.shields.io/static/v1?label=Download&message=v1.0.0_ALPHA&color=blue
[download]: https://github.com/MaukiNet/MaukiBotTV/releases/tag/v1.0.0_ALPHA

[![Deploy](https://github.com/MaukiNet/MaukiBotTV/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/MaukiNet/MaukiBotTV/actions/workflows/deploy.yml)
[ ![version][] ][download]
[ ![license-shield][] ][license]
<!--
![maven-central][]
-->

<img align="right" src="https://github.com/MaukiNet/.github/blob/main/assets/4542221e59746b200f7d3d2c96cf9210.png" height="200" width="200">

# Homepage
Twitch-Bot für Kikis Twitch-Kanal. Leicht zu verwenden und einfach zu verstehen.

## Table of Contents
1. [Environmental Variables](#environmental-variables)
2. [Running](#running-on-maukinet)
3. [Commands](#commands)

## Environmental Variables
```env
PASSWORD=
```
``.env`` file has to be located in project root (development) or in the parent folder of the project root (deployed on vsxx)

## Running (on mauki.net)
| **Key**         	  | **Value**               	        |
|--------------------|----------------------------------|
| Location        	  | `/home/runner1/_work/maukibottv` |
| Service Name     	 | `maukibottv`             	       |
| Build sources   	  | `npm run build`          	       |
| Run build       	  | `npm run start`          	       |

## Commands
| **Invoke**         	| **Description**           | **Aliases** |
|-----------------	  |-------------------------	| ------------- |
| `!discord`       	| Sends link to discord-server | `!dc` |
| `!youtube`        	| Sends link to youtube-channel | `!yt` |
| `!steam`         	| Sends steam friend-code	| - |
| `!genshinimpact`        	| Sends genshin uid	| `!genshin` |
