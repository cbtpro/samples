// Copyright 2022 peter
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const expect = require('chai').expect
const Utils = require('../src/utils')

describe('utils工具集测试集', function() {
  let utils
  beforeEach(function() {
    utils = new Utils()
  })

  it('如果f2c返回0摄氏度为32华氏度，测试通过了吗？', function() {
    const fahrenheit = 32
    const celsius = utils.f2c(fahrenheit)
    expect(celsius).to.eql(0)
  })
  it('如果f2c返回10摄氏度为50华氏度，测试通过了吗？', function() {
    const fahrenheit = 50
    const celsius = utils.f2c(fahrenheit)
    expect(celsius).to.eql(10)
  })
})