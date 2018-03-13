import {stringBatchReplace, EDIT_TYPE} from "../lib/stringBatchUpdate";

it('test replace', function () {
  let newText = stringBatchReplace("abc",[
    {
      type:EDIT_TYPE.replace,
      start:1,
      end:3,
      text:"yy"
    }])
  expect(newText).toEqual("ayy")
});

it('test insert', function () {
  let newText = stringBatchReplace("abc",[
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    }])
  expect(newText).toEqual("axbc")
});


it('test together', function () {
  let newText = stringBatchReplace("abc",[
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    },
    {
      type:EDIT_TYPE.replace,
      start:2,
      end:3,
      text:"yy"
    }
    ])
  expect(newText).toEqual("axbyy")
});

it('test reorder together', function () {
  let newText = stringBatchReplace("abc",[
    {
      type:EDIT_TYPE.replace,
      start:2,
      end:3,
      text:"yy"
    },
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    }
  ])
  expect(newText).toEqual("axbyy")
});




