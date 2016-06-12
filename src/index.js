import {getTag, getDraft, getResult} from './common';
import actions from './actions';
import debug from 'debug';

module.exports = (str) => {
  const result = [];
  switch (str.length) {
    case 2: {
      // 单词
      const tmpDraft = getTag(str.split('').join(' '));
      debug('wulian:draft')(tmpDraft);
      if (tmpDraft[0].tag === 'v' && tmpDraft[2].tag === 'n') {
        result.push({
          type: 'action',
          action: tmpDraft[0].word,
          target: [],
          object: tmpDraft[2].word
        });
      }
      result.push({
        type: 'scene',
        scene: str
      });
      break;
    }
    default: {
      // 短句
      const tmpDraft = getDraft(str);
      debug('wulian:draft')(tmpDraft);
      if (tmpDraft.tag.length === 2 && tmpDraft.tag[0].tag === 'v' && tmpDraft.tag[1].tag === 'n') {
        result.push({
          type: 'action',
          action: tmpDraft.tag[0].word,
          target: [],
          object: tmpDraft.tag[1].word
        });
      }
    }
  }
  return getResult(result);
};
