---
title: GET `/faces/emoji`
weight: 3
---

Use this endpoint to get a specific Twemoji that is supported as a face.

## Arguments

No arguments specific to this endpoint. See arguments available to all [`/faces` endpoints](/docs/faces/#arguments).

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/faces/1f47b
```

Response:

```json
{
  ...
  "data": {
    "1f47b": {
      "0": "head",
      "1": "eyes",
      "2": "eyes",
      "3": "eyes",
      "4": "mouth"
    }
  },
  ...
}
```
