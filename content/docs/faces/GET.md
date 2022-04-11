---
title: GET `/faces`
weight: 2
---

Use this endpoint to find which Twemojis are supported as faces.

## Arguments

No arguments specific to this endpoint. See arguments available to all [`/faces` endpoints](/docs/faces/#arguments).

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/faces
```

Response:

```json
{
  ...
  "data": {
    "1f383": {
      "0": "head",
      "1": "headwear",
      ...
    },
    "1f479": {
      "0": "head",
      "1": "head",
      ...
    },
  },
  ...
}
```
