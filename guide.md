# QuickPort
### インストール方法
<pre>
> npm install -g
</pre>
### アンインストール方法
<pre>
> npm uninstall -g
</pre>
### PowerShell の実行ポリシーを変更
<pre>
> Set-ExecutionPolicy RemoteSigned
</pre>
<br>
<hr>
<br>

### 型
<pre>
> quickport <コマンド> <引数> ...
</pre>

### コマンドの種類と引数の渡し方
コマンドは3つ用意されています。
- add
    - ポート設定を追加します。
    - <code>add <開放するポート番号> <ホスト側のIPアドレス> <WSL側のIPアドレス></code>
- show
    - ポート設定とIPアドレスを確認します。
    - <code>show</code>
- remove
    - ポート設定を消去します。
    - <code>remove <解放されているポート番号> <ホスト側のIPアドレス></code>

<br><br>
<hr>
