function buildName3(firstName: string, ...restOfName: Array<string>){//...restOfName: Array<string>表示数组之后展开成字符串
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");//至少传入一个参数

//this和箭头函数
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;//这里表示什么意思？
}

let deck: Deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card:" + pickedCard.card + " of " + pickedCard.suit);

// this参数在回调函数里(有点问题)
