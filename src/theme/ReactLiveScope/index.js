/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-07 17:23:28
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-07 17:24:03
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ResizeObserver from 'rc-resize-observer';
// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ResizeObserver
};

export default ReactLiveScope;