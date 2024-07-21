//fetch関数を使って、外部のAPIからデータを取得するコードを書いてください。
//スターウォーズについてのデモデータのレスポンスを返すAPIがあるのでこちらを使ってください。（https://swapi.dev/api/people）
fetch('https://swapi.dev/api/people')
  .catch(rej => console.log(rej));

//fetch関数を使って、次のデータを送信するコードを書いてください。
//1. HTTPメソッドはPOST
//2. ヘッダーの Content-Type を application/json に設定
//3. body に (3) で取得したスターウォーズのルーク（people/1）のデータを設定
//4. データの送り先は「https://example.com」で仮想のURLに設定してください。
fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(lukeData => {
    return fetch('https://example.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lukeData)
    });
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('エラー:', error);
  });

      ///method: 'POST'→ 新しい情報を送るという意味、GETは情報を取得するという意味（デフォルトなので記述は不要
      ///headers: { 'Content-Type': 'application/json' }→ データをJSON形式で送るという意味,送る情報の種類
      ///body: JSON.stringify(lukeData)→ データをJSON形式で送るという意味,送る情報の種類

//fetch関数を使って、エラーハンドリングを含む非同期通信のコードを書いてください。
fetch('https://swapi.dev/api/people')
  .then(res => console.log(res))
  .catch(rej => console.log(rej));