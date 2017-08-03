# vue.jsでMarkdownEditorで書けるメモアプリを作ってみた

## 今回の目標
- vue.jsの理解度を高める
- 今まで作ってきたもの（MarkdownEditor,ToDoリスト）を応用してオリジナルのアプリを作る

## vue.jsについて
- MVVMという設計基盤として構築されているJavaScriptフレームワーク
- 「Model（データ）」「View（画面）」「ViewModel（メイン処理）」を分けて考えることができる

### 便利だと思ったところ
- データバインディングが簡単
- 慣れてくるとデータの流れが読みやすくて作りやすい  

→[vue.js devtoolsの導入方法と機能まとめ。vue.jsを用いた開発を効率化させよう！](http://qiita.com/hashimoto-1202/items/c81f5d4c271eef16d957)

### ハマったところ
- 慣れるまで見慣れない
- 詰まったときの答えがすぐに見つからない
- 最適な作り方がわからない

### やれなかったこと・反省点
- dataをlocalStorageもしくはDBにいれて保存できるようにしたかった
- dataはtitleとMarkdownのオリジナルテキストのみにしたかった
- もっとDOMの構造をシンプルに書きたかった
