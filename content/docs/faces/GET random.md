---
title: GET `/faces/random`
weight: 3
---

Use this endpoint to get a random Twemoji that is supported as a face.

## Arguments

No arguments specific to this endpoint. See arguments available to all [`/faces` endpoints](/docs/faces/#arguments).

## Example

Request:

```curl
CUSTOM_TWEMOJI_API=https://customtwemojiapi.com/v1; curl $CUSTOM_TWEMOJI_API/faces/rabdom
```

Response:

```json
{
  ...
  "data": {
    "1f608": {
      "0": "head",
      "1": "head",
      "2": "head",
      "3": "mouth",
      "4": "eyes",
      "5": "eyes"
    }
  },
  "links": {
    "self": "https://customtwemojiapi.com/v1/faces/1f608"
  },
  ...
}
```
