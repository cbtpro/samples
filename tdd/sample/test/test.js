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
const assert = require('assert')

describe('金丝雀测试', function() {
  it('canary金丝雀测试通过了吗？', function() {
    expect(true).to.eql(true)
  })
})

describe('简单测试', function() {
  describe('#indexOf()', function() {
    it('当值不存在时应该返回-1，通过了吗？', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
})
