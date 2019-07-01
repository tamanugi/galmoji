import test from 'ava';
import galmoji from './index'

test('awesome', t => {
  const res = galmoji('AWESOME')
  t.is(res, '闩山ヨ∫口从ヨ')
});

test('よろしくお願いします', async t => {
  const res = galmoji('よろしくお願いします')
  t.is(res, 'ょзι＜ぉ原頁ﾚヽιます')
});

test('タピオカ', async t => {
  const res = galmoji('タピオカ')
  t.is(res, '勺ｔ°才ヵ')
});
