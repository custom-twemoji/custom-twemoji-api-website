---
title: 🙂 Faces
weight: 1
---

Faces are a subset of Twemojis supported by the API. To be supported, the Twemoji is broken down into discrete layers and each is manually labelled as a feature.

## Features

1. head
1. cheeks
1. mouth
1. nose
1. eyes
1. eyewear
1. headwear
1. other

## Labeling

Deciding which feature to label a layer can be subjective, especially with the inclusion of an `other` label. For example, a layer with dimples could be commonly classified as part of the cheeks or the mouth.

It's also relevant to consider how the layer looks when combined with other Twemojis. To continue with the same example, if the layer with dimples is often hidden behind other `cheeks` layers when labeled as `mouth`, then it might be better to label it `cheeks` instead so it can be used more.

Because of these considerations, features may not be intuitive for every Twemoji you encounter and potentially not consistent when comparing between Twemojis.

If you feel strongly about changing a label, feel free to [raise an issue](https://github.com/custom-twemoji/custom-twemoji-api/issues/new).
