/*
It's Christmas! You had to wait the whole year for this moment. You can already see all the presents under the
Christmas tree. But you have to wait for the next morning in order to unwrap them. You really want to know
what's inside those boxes. But as a clever child, you can make your assumptions already.

You know you were a good child this year. So you may assume that you'll only get things from your wishlist.
You see those presents, you can lift them and you can shake them a bit. Now you can make your assumptions about
what you'll get.

Your Task:
You will be given a wishlist (array) containing all possible items. Each item is in the format:
{name: "toy car", size: "medium", clatters: "a bit", weight: "medium"}

You also get a list of presents (array) that you see under the Christmas tree, which have the following format each:
{size: "small", clatters: "no", weight: "light"}

Your task is to create a list of all possible presents you might get.

Rules:
- Possible values for size: "small", "medium", "large"
- Possible values for clatters: "no", "a bit", "yes"
- Possible values for weight: "light", "medium", "heavy"
- The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
- Don't add any item more than once to the result
- The order of names in the returned array doesn't matter
- It's possible that multiple items from your wish list have the same attribute values. If they match the attributes
  of one of the presents, add all of them.
*/

function guessGifts(wishlist, presents) {
  return wishlist
    .filter(wish =>
      presents.some(present =>
        wish.size === present.size &&
        wish.clatters === present.clatters &&
        wish.weight === present.weight
      )
    )
    .map(v => v.name);
}

const wishlist = [
  {name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light'},
  {name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium'},
  {name: 'Card Game', size: 'small', clatters: 'no', weight: 'light'}
];

const presents = [
  {size: 'medium', clatters: 'a bit', weight: 'medium'},
  {size: 'small', clatters: 'yes', weight: 'light'}
];

guessGifts(wishlist, presents); //=> ["Mini Puzzle", "Toy Car"]
