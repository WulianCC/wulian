import {cut, tag, extract} from 'nodejieba';
import actions from './actions';

exports.getTag = (str) => tag(str);

exports.getDraft = (str) => {
  const draft = {
    cut: cut(str, 'MP', 3),
    tag: tag(str),
    extract: extract(str, 5)
  };
  return draft;
};

exports.getResult = (results) => {
  for (const result of results) {
    if (result.action !== undefined && actions[result.action] !== undefined) {
      result.action = actions[result.action];
    }
  }
  return results;
};
