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
const linesCount = require('../src/files')

describe('测试files.js', function() {
  it('返回了文件的正确行数', function(done) {
    const callback = function(count) {
      expect(count).to.be.eql(29)
      done()
    }
    linesCount('src/files.js', callback)
  })
  it('访问无效的文件', function(done) {
    const onError = function(error) {
      expect(error).to.be.eql('unable to open file src/flies.js')
      done()
    }
    linesCount('src/flies.js', undefined, onError)
  })
})