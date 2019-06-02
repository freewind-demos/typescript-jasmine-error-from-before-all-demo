TypeScript Jasmine Error from BeforeAll Demo
==============================================

Jasmine的行为很奇怪：在`beforeAll`中代码失败了，它居然会继续执行其它的测试，而且没有办法改变这种行为。

https://github.com/jasmine/jasmine/issues/577

从五年前就开始讨论，直到现在也没有修改。是时候换掉它了。

```
npm install
npm test
```
