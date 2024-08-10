# Test with browser

[![CI](https://github.com/peterekepeter/test-with-browser/actions/workflows/ci.yml/badge.svg)](https://github.com/peterekepeter/test-with-browser/actions/workflows/ci.yml)

Tests a website at given url for errors.

## Inputs

### `url`

**Required** The url that should be tested by the browser.

## Example usage

```yaml
- name: Test with Browser
  uses: peterekepeter/test-with-browser@v1.0.0
  with:
    url: 'https://github.com/status'
```

If all goes well, this will output

```
TEST: https://github.com/status
. GET https://github.com/status
. 200 https://github.com/status
. GET https://github.com/favicon.ico
. 200 https://github.com/favicon.ico
success! no errors were found on https://github.com/status
```