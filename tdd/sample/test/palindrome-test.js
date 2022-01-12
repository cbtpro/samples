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
const isPalindrome = require('../src/palindrome')

describe('palindrome回文测试', function() {
  it('should pass the canary test', function() {
    expect(true).to.be.true
  })

  it('mom是回文', function() {
    expect(isPalindrome('mom')).to.be.true
  })

  it('dad是回文', function() {
    expect(isPalindrome('dad')).to.be.true
  })

  it('dude不是回文', function() {
    expect(isPalindrome('dude')).to.be.false
  })

  it('mom mom是回文', function() {
    expect(isPalindrome('mom mom')).to.be.true
  })

  it('mom dad不是回文', function() {
    expect(isPalindrome('mom dad')).to.be.false
  })

  it('上海自来水来自海上 是回文', function() {
    expect(isPalindrome('上海自来水来自海上')).to.be.true
  })

  it('黄山落叶松叶落山黄 是回文', function() {
    expect(isPalindrome('黄山落叶松叶落山黄')).to.be.true
  })

  it('山西运煤车煤运山西 是回文', function() {
    expect(isPalindrome('山西运煤车煤运西山')).to.be.true
  })
  it('\'\' 不是回文', function() {
    expect(isPalindrome('')).to.be.false
  })

  it('\'  \' 不是回文', function() {
    expect(isPalindrome('  ')).to.be.false
  })

  it('无参数时抛出异常', function() {
    const call = function() {
      isPalindrome()
    }
    expect(call).to.throw(Error, 'Invalid argument')
  })
})