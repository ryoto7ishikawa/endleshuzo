var count = 0;

function burn() {
  var lines = ['お醤油ベースのお吸い物にあんこ。\n非常識の中に常識あり。', '最適なサポートの形というのは、相手に寄り添ってみなければわからない。',
    '真面目な人ほど、今自分の目の前のことばかりに意識が向いてしまいます。\nそんなとき僕は、「真剣」であっても、「深刻」にはなるなと言っています。\nこの２つの言葉は、似ているようで違います。\n「自分はもうダメだ」「俺はどうせダメなんだ」などと「深刻」に悩んでいるとき、心のどこかに言い訳があるはずです。\n「もうダメだ」と思えば、それ以上何の努力もしなくてすむからです。\nでもそれでは問題は解決しない。\n言い訳のために深刻なふりをするのはやめ、そこから抜け出す方法を真剣に考えるべきなのです。',
    '僕は今までやってきたことを少しも変えていない。\n周りの評価が変わっても、自分を評価するのは自分だけですから。',
    'チャンスはいつやってくるか分からないからこそ、 目の前のドアが開くまで叩き続け、 失敗や苦しい経験をし続けるしかない。',
    '失敗はダメじゃないんだ。\n失敗してこそ自分が見えてくるんだ。',
    '挫折や崖っぷちは自分を変え、 成長させてくれるチャンス。\nトップアスリートで挫折を経験していない人はいません。', '生まれながらに自信満々の人などいません。\n自信を持ちたいから頑張れる。',
    '何言ってんだよ！！ \nその崖っぷちが最高のチャンスなんだぜ！！\n自分の全ての力を出し切れるんだから！！！\n崖っぷちありがとう！！ 最高だぁぁぁぁぁぁぁ！！！！ ', '諦めんなよ！諦めんなよ、お前！！\nどうしてそこでやめるんだ、そこで！！もう少し頑張ってみろよ！\nダメダメダメ！諦めたら！\n周りのこと思えよ、応援してる人たちのこと思ってみろって！\nあともうちょっとのところなんだから！\n俺だってこのマイナス10度のところ、しじみがトゥルルって頑張ってんだよ！\nずっとやってみろ！必ず目標を達成できる！\nだからこそNever Give Up！！'
  ];
  document.getElementById("text-button").onclick = function () {
    if (!confirm('注意事項は確認しましたか?')) {
      return;
    }
    for (;;) {
      var num = Math.random();
      count += 1;
      if (num <= 0.01 || count >= 100) {
        count = 0;
        break;
      }
      var index = Math.floor(num * lines.length);
      alert(lines[index]);
    }
  };
}
