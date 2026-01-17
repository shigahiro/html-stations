# パッケージマネージャ

snapを使った方がいいかも？しれなかったけど，面倒だったので，homebrewを使うことにした

https://docs.brew.sh/Homebrew-on-Linux

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bashrc


sudo apt-get install build-essential procps curl file git
```

# nodeとyarnをいれる


```
shigahiro@DESKTOP-56G9DSU:~$ brew install node
✔︎ JSON API cask.jws.json                                                                                                                                                              Downloaded   15.3MB/ 15.3MB
✔︎ JSON API formula.jws.json                                                                                                                                                           Downloaded   32.0MB/ 32.0MB
==> Fetching downloads for: node
✔︎ Bottle Manifest node (25.3.0)                                                                                                                                                       Downloaded   24.1KB/ 24.1KB
✔︎ Bottle Manifest brotli (1.2.0)                                                                                                                                                      Downloaded    8.0KB/  8.0KB
✔︎ Bottle brotli (1.2.0)                                                                                                                                                               Downloaded  841.7KB/841.7KB
✔︎ Bottle Manifest c-ares (1.34.6)                                                                                                                                                     Downloaded    7.5KB/  7.5KB
✔︎ Bottle c-ares (1.34.6)                                                                                                                                                              Downloaded  379.0KB/379.0KB
✔︎ Bottle Manifest icu4c@78 (78.2)                                                                                                                                                     Downloaded    9.7KB/  9.7KB
✔︎ Bottle Manifest libnghttp2 (1.68.0)                                                                                                                                                 Downloaded    7.3KB/  7.3KB
✔︎ Bottle libnghttp2 (1.68.0)                                                                                                                                                          Downloaded  254.9KB/254.9KB
✔︎ Bottle Manifest libnghttp3 (1.14.0)                                                                                                                                                 Downloaded    7.3KB/  7.3KB
✔︎ Bottle libnghttp3 (1.14.0)                                                                                                                                                          Downloaded  219.1KB/219.1KB
✔︎ Bottle Manifest ca-certificates (2025-12-02)                                                                                                                                        Downloaded    2.0KB/  2.0KB
✔︎ Bottle ca-certificates (2025-12-02)                                                                                                                                                 Downloaded  131.8KB/131.8KB
✔︎ Bottle Manifest openssl@3 (3.6.0)                                                                                                                                                   Downloaded   11.8KB/ 11.8KB
✔︎ Bottle Manifest libngtcp2 (1.19.0)                                                                                                                                                  Downloaded    9.3KB/  9.3KB
✔︎ Bottle Manifest libuv (1.51.0)                                                                                                                                                      Downloaded    9.6KB/  9.6KB
✔︎ Bottle Manifest simdjson (4.2.4)                                                                                                                                                    Downloaded    7.4KB/  7.4KB
✔︎ Bottle Manifest ncurses (6.6)                                                                                                                                                       Downloaded   11.9KB/ 11.9KB
✔︎ Bottle Manifest readline (8.3.3)                                                                                                                                                    Downloaded   10.0KB/ 10.0KB
✔︎ Bottle Manifest zlib (1.3.1)                                                                                                                                                        Downloaded   10.7KB/ 10.7KB
✔︎ Bottle Manifest sqlite (3.51.2)                                                                                                                                                     Downloaded   11.4KB/ 11.4KB
✔︎ Bottle libngtcp2 (1.19.0)                                                                                                                                                           Downloaded  462.6KB/462.6KB
✔︎ Bottle libuv (1.51.0)                                                                                                                                                               Downloaded  422.8KB/422.8KB
✔︎ Bottle Manifest uvwasi (0.0.23)                                                                                                                                                     Downloaded    8.3KB/  8.3KB
✔︎ Bottle Manifest xz (5.8.2)                                                                                                                                                          Downloaded   11.8KB/ 11.8KB
✔︎ Bottle Manifest lz4 (1.10.0)                                                                                                                                                        Downloaded   13.8KB/ 13.8KB
✔︎ Bottle zlib (1.3.1)                                                                                                                                                                 Downloaded  175.1KB/175.1KB
✔︎ Bottle Manifest zstd (1.5.7)                                                                                                                                                        Downloaded   16.2KB/ 16.2KB
✔︎ Bottle Manifest mpdecimal (4.0.1)                                                                                                                                                   Downloaded   11.9KB/ 11.9KB
✔︎ Bottle simdjson (4.2.4)                                                                                                                                                             Downloaded    1.3MB/  1.3MB
✔︎ Bottle uvwasi (0.0.23)                                                                                                                                                              Downloaded   89.0KB/ 89.0KB
✔︎ Bottle Manifest berkeley-db@5 (5.3.28_1)                                                                                                                                            Downloaded   13.9KB/ 13.9KB
✔︎ Bottle Manifest bzip2 (1.0.8)                                                                                                                                                       Downloaded   12.8KB/ 12.8KB
✔︎ Bottle Manifest expat (2.7.3)                                                                                                                                                       Downloaded    7.5KB/  7.5KB
✔︎ Bottle Manifest libedit (20251016-3.1_1)                                                                                                                                            Downloaded    7.7KB/  7.7KB
✔︎ Bottle readline (8.3.3)                                                                                                                                                             Downloaded  833.0KB/833.0KB
✔︎ Bottle sqlite (3.51.2)                                                                                                                                                              Downloaded    3.0MB/  3.0MB
✔︎ Bottle Manifest libffi (3.5.2)                                                                                                                                                      Downloaded    9.3KB/  9.3KB
✔︎ Bottle xz (5.8.2)                                                                                                                                                                   Downloaded  837.8KB/837.8KB
✔︎ Bottle Manifest unzip (6.0_8)                                                                                                                                                       Downloaded   10.2KB/ 10.2KB
✔︎ Bottle mpdecimal (4.0.1)                                                                                                                                                            Downloaded  230.7KB/230.7KB
✔︎ Bottle zstd (1.5.7)                                                                                                                                                                 Downloaded    1.1MB/  1.1MB
✔︎ Bottle bzip2 (1.0.8)                                                                                                                                                                Downloaded  228.4KB/228.4KB
✔︎ Bottle expat (2.7.3)                                                                                                                                                                Downloaded  272.4KB/272.4KB
✔︎ Bottle Manifest python@3.14 (3.14.2)                                                                                                                                                Downloaded   29.5KB/ 29.5KB
✔︎ Bottle libedit (20251016-3.1_1)                                                                                                                                                     Downloaded  260.4KB/260.4KB
✔︎ Bottle libffi (3.5.2)                                                                                                                                                               Downloaded  255.5KB/255.5KB
✔︎ Bottle unzip (6.0_8)                                                                                                                                                                Downloaded  187.3KB/187.3KB
✔︎ Bottle lz4 (1.10.0)                                                                                                                                                                 Downloaded  320.8KB/320.8KB
✔︎ Bottle ncurses (6.6)                                                                                                                                                                Downloaded    2.8MB/  2.8MB
✔︎ Bottle openssl@3 (3.6.0)                                                                                                                                                            Downloaded   11.2MB/ 11.2MB
✔︎ Bottle python@3.14 (3.14.2)                                                                                                                                                         Downloaded   21.1MB/ 21.1MB
✔︎ Bottle berkeley-db@5 (5.3.28_1)                                                                                                                                                     Downloaded   24.1MB/ 24.1MB
✔︎ Bottle node (25.3.0)                                                                                                                                                                Downloaded   28.4MB/ 28.4MB
✔︎ Bottle icu4c@78 (78.2)                                                                                                                                                              Downloaded   33.4MB/ 33.4MB
==> Installing dependencies for node: brotli, c-ares, icu4c@78, libnghttp2, libnghttp3, ca-certificates, openssl@3, libngtcp2, libuv, simdjson, ncurses, readline, zlib, sqlite, uvwasi, lz4, xz, zstd, mpdecimal, berkeley-db@5, bzip2, expat, libedit, libffi, unzip and python@3.14
==> Installing node dependency: brotli
==> Pouring brotli--1.2.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/brotli/1.2.0: 33 files, 2MB
==> Installing node dependency: c-ares
==> Pouring c-ares--1.34.6.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/c-ares/1.34.6: 176 files, 1.4MB
==> Installing node dependency: icu4c@78
==> Pouring icu4c@78--78.2.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/icu4c@78/78.2: 279 files, 94.4MB
==> Installing node dependency: libnghttp2
==> Pouring libnghttp2--1.68.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libnghttp2/1.68.0: 15 files, 915KB
==> Installing node dependency: libnghttp3
==> Pouring libnghttp3--1.14.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libnghttp3/1.14.0: 20 files, 740.6KB
==> Installing node dependency: ca-certificates
==> Pouring ca-certificates--2025-12-02.all.bottle.tar.gz
Loaded 146 system certificates
Loaded 14 Mozilla certificates
==> CA certificates have been bootstrapped from the system CA store at /etc/ssl/certs/ca-certificates.crt
🍺  /home/linuxbrew/.linuxbrew/Cellar/ca-certificates/2025-12-02: 4 files, 252.3KB
==> Installing node dependency: openssl@3
==> Pouring openssl@3--3.6.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/openssl@3/3.6.0: 7,619 files, 45.1MB
==> Installing node dependency: libngtcp2
==> Pouring libngtcp2--1.19.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libngtcp2/1.19.0: 23 files, 1.5MB
==> Installing node dependency: libuv
==> Pouring libuv--1.51.0.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libuv/1.51.0: 34 files, 1.5MB
==> Installing node dependency: simdjson
==> Pouring simdjson--4.2.4.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/simdjson/4.2.4: 19 files, 6.9MB
==> Installing node dependency: ncurses
==> Pouring ncurses--6.6.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/ncurses/6.6: 4,071 files, 11.7MB
==> Installing node dependency: readline
==> Pouring readline--8.3.3.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/readline/8.3.3: 56 files, 3MB
==> Installing node dependency: zlib
==> Pouring zlib--1.3.1.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/zlib/1.3.1: 14 files, 487.4KB
==> Installing node dependency: sqlite
==> Pouring sqlite--3.51.2.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/sqlite/3.51.2: 13 files, 6.7MB
==> Installing node dependency: uvwasi
==> Pouring uvwasi--0.0.23.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/uvwasi/0.0.23: 15 files, 370.2KB
==> Installing node dependency: lz4
==> Pouring lz4--1.10.0.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/lz4/1.10.0: 24 files, 817.9KB
==> Installing node dependency: xz
==> Pouring xz--5.8.2.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/xz/5.8.2: 97 files, 2.8MB
==> Installing node dependency: zstd
==> Pouring zstd--1.5.7.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/zstd/1.5.7: 32 files, 3.2MB
==> Installing node dependency: mpdecimal
==> Pouring mpdecimal--4.0.1.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/mpdecimal/4.0.1: 22 files, 821.7KB
==> Installing node dependency: berkeley-db@5
==> Pouring berkeley-db@5--5.3.28_1.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/berkeley-db@5/5.3.28_1: 5,272 files, 92.0MB
==> Installing node dependency: bzip2
==> Pouring bzip2--1.0.8.x86_64_linux.bottle.2.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/bzip2/1.0.8: 32 files, 622KB
==> Installing node dependency: expat
==> Pouring expat--2.7.3.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/expat/2.7.3: 23 files, 898.3KB
==> Installing node dependency: libedit
==> Pouring libedit--20251016-3.1_1.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libedit/20251016-3.1_1: 61 files, 1.8MB
==> Installing node dependency: libffi
==> Pouring libffi--3.5.2.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/libffi/3.5.2: 19 files, 835.8KB
==> Installing node dependency: unzip
==> Pouring unzip--6.0_8.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/unzip/6.0_8: 17 files, 480.9KB
==> Installing node dependency: python@3.14
==> Pouring python@3.14--3.14.2.x86_64_linux.bottle.1.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/python@3.14/3.14.2: 3,309 files, 79MB
==> Installing node
==> Pouring node--25.3.0.x86_64_linux.bottle.tar.gz
🍺  /home/linuxbrew/.linuxbrew/Cellar/node/25.3.0: 1,951 files, 98.7MB
==> Running `brew cleanup node`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Caveats
Bash completion has been installed to:
  /home/linuxbrew/.linuxbrew/etc/bash_completion.d
shigahiro@DESKTOP-56G9DSU:~$ node -v
v25.3.0
shigahiro@DESKTOP-56G9DSU:~$ brew install yarn
==> Fetching downloads for: yarn
✔︎ Bottle Manifest yarn (1.22.22)                                                                                                                                                      Downloaded    1.9KB/  1.9KB
✔︎ Bottle yarn (1.22.22)                                                                                                                                                               Downloaded    1.2MB/  1.2MB
==> Pouring yarn--1.22.22.all.bottle.1.tar.gz
==> Caveats
yarn requires a Node installation to function. You can install one with:
  brew install node
==> Summary
🍺  /home/linuxbrew/.linuxbrew/Cellar/yarn/1.22.22: 16 files, 5.4MB
==> Running `brew cleanup yarn`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
shigahiro@DESKTOP-56G9DSU:~$ yarn -v
1.22.22
```

# TechTrain Learning Agent

上記の拡張機能を入れた

> リポジトリはユーザーディレクトリ直下に配置することをおすすめします。

上記の通知が来たが一旦無視。


# テストがうまく実行されない

拡張機能でテストが実行できないので，直接テストを実行してみたら，うまくいかない

```
$ yarn playwright test playwright/station01.spec.ts
yarn run v1.22.22
$ /home/shigahiro/develop/railway/html-stations/node_modules/.bin/playwright test playwright/station01.spec.ts
<testsuites id="" name="" tests="4" failures="4" skipped="0" errors="0" time="0.6933229999989271">
<testsuite name="station01.spec.ts" timestamp="2026-01-17T04:14:29.601Z" hostname="chromium" tests="4" failures="4" skipped="0" time="0.16" errors="0">
<testcase name="1. html タグが存在すること" classname="station01.spec.ts" time="0.043">
<failure message="station01.spec.ts:11:5 1. html タグが存在すること" type="FAILURE">
<![CDATA[  [chromium] › station01.spec.ts:11:5 › 1. html タグが存在すること ──────────────────────────────────────────

    Error: browserType.launch: 
    ╔══════════════════════════════════════════════════════╗
    ║ Host system is missing dependencies to run browsers. ║
    ║ Please install them with the following command:      ║
    ║                                                      ║
    ║     sudo npx playwright install-deps                 ║
    ║                                                      ║
    ║ Alternatively, use apt:                              ║
    ║     sudo apt-get install libnss3\                    ║
    ║         libnspr4\                                    ║
    ║         libasound2                                   ║
    ║                                                      ║
    ║ <3 Playwright Team                                   ║
    ╚══════════════════════════════════════════════════════╝



]]>
```

出力にあるコマンドを実行したらうまくいかない

```
$ npx playwright install-deps
Installing dependencies...
Switching to root user to install dependencies...
Hit:1 http://security.ubuntu.com/ubuntu noble-security InRelease
Hit:2 http://archive.ubuntu.com/ubuntu noble InRelease
Hit:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease
Hit:4 http://archive.ubuntu.com/ubuntu noble-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'libatk-bridge2.0-0t64' instead of 'libatk-bridge2.0-0'
Note, selecting 'libatk1.0-0t64' instead of 'libatk1.0-0'
Note, selecting 'libatspi2.0-0t64' instead of 'libatspi2.0-0'
Note, selecting 'libcups2t64' instead of 'libcups2'
Note, selecting 'libglib2.0-0t64' instead of 'libglib2.0-0'
Note, selecting 'libgtk-3-0t64' instead of 'libgtk-3-0'
Note, selecting 'libpng16-16t64' instead of 'libpng16-16'
Note, selecting 'libsoup-2.4-1' instead of 'libsoup2.4-1'
Note, selecting 'libevent-2.1-7t64' instead of 'libevent-2.1-7'
Package libasound2 is a virtual package provided by:
  libasound2t64 1.2.11-1ubuntu0.1 (= 1.2.11-1ubuntu0.1)
  liboss4-salsa-asound2 4.2-build2020-1ubuntu3
You should explicitly select one to install.

E: Package 'libasound2' has no installation candidate
E: Unable to locate package libicu70
E: Unable to locate package libffi7
E: Unable to locate package libx264-163
Failed to install browser dependencies
Error: Installation process exited with code: 100
```

アップデートしてみる
https://github.com/saasquatch/bunshi/pull/100

```
$ yarn upgrade @playwright/test --latest
yarn upgrade v1.22.22
(node:27600) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Rebuilding all packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
└─ @playwright/test@1.57.0
info All dependencies
├─ @playwright/test@1.57.0
├─ playwright-core@1.57.0
└─ playwright@1.57.0
Done in 3.82s.
```

テストは実行できるようになったぽい？


```
yarn playwright test playwright/station01.spec.ts
yarn run v1.22.22
$ /home/shigahiro/develop/railway/html-stations/node_modules/.bin/playwright test playwright/station01.spec.ts
<testsuites id="" name="" tests="4" failures="1" skipped="0" errors="0" time="7.533714999999999">
<testsuite name="station01.spec.ts" timestamp="2026-01-17T04:39:07.775Z" hostname="chromium" tests="4" failures="1" skipped="0" time="6.6" errors="0">
<testcase name="1. html タグが存在すること" classname="station01.spec.ts" time="0.478">
</testcase>
<testcase name="2. img タグに src 属性が正しく使えていること" classname="station01.spec.ts" time="5.024">
<failure message="station01.spec.ts:20:5 2. img タグに src 属性が正しく使えていること" type="FAILURE">
<![CDATA[  [chromium] › station01.spec.ts:20:5 › 2. img タグに src 属性が正しく使えていること ───────────────────────────────

    Test timeout of 5000ms exceeded.

    Error: expect(locator).toHaveAttribute(expected) failed

    Locator:  locator('img')
    Expected: "./assets/image/railway-thumbnail.png"
    Received: "assets/image/railway-thumbnail.png"

    Call log:
      - Expect "toHaveAttribute" with timeout 5000ms
      - waiting for locator('img')
        8 × locator resolved to <img alt="railway" src="assets/image/railway-thumbnail.png"/>
          - unexpected value "assets/image/railway-thumbnail.png"


      20 | test('2. img タグに src 属性が正しく使えていること', async ({ page }) => {
      21 |   const img = await page.locator('img')
    > 22 |   await expect(img).toHaveAttribute(
         |                     ^
      23 |     'src',
      24 |     './assets/image/railway-thumbnail.png',
      25 |   );
        at /home/shigahiro/develop/railway/html-stations/playwright/station01.spec.ts:22:21

    Error Context: ../test-results/station01-2-img-タグに-src-属性が正しく使えていること-chromium/error-context.md
]]>
</failure>
<system-out>
<![CDATA[
[[ATTACHMENT|test-results/station01-2-img-タグに-src-属性が正しく使えていること-chromium/error-context.md]]
]]>
</system-out>
</testcase>
<testcase name="3. `TechTrainの使い方` は p タグ、span タグを使用し、id や class を使っていないこと" classname="station01.spec.ts" time="0.574">
</testcase>
<testcase name="4. `Suguru Ohki` は p タグを使用し、id や class を使っていないこと" classname="station01.spec.ts" time="0.524">
</testcase>
</testsuite>
</testsuites>
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
