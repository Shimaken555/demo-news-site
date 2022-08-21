import { Article } from '../types'

// Webクリップの追加アクション
export const addBookmark = ({ bookmarkArticle }: { bookmarkArticle: Article }) => {
  return { type: 'ADD_Bookmark', article: bookmarkArticle }
}

// Webクリップの削除アクション
export const deleteBookmark = ({ bookmarkArticle }: { bookmarkArticle: Article }) => {
  return { type: 'DELETE_Bookmark', article: bookmarkArticle }
}

