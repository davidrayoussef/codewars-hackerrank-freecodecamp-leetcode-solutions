/*
Create a pagination utility class for querying paging information related to an array.

The class takes an array of values and an integer indicating how many items will be allowed per each page.

The following are some examples of how this class is used:

let pagination = new PaginationHelper(['a','b','c','d','e','f'], 4);
pagination.pageCount(); //=> ['a','b','c','d'] and ['e','f'] => 2
pagination.itemCount(); //=> 6
pagination.pageItemCount(0); //=> page items at index 0 => ['a','b','c','d'] => 4
pagination.pageItemCount(1); //=> page items at index 1 => ['e','f'] => 2
pagination.pageItemCount(2); //=> -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
pagination.pageIndex(5); //=> item at index 5 of collection => 'f' => page index of 'f' => 1
pagination.pageIndex(2); //=> item at index 2 of collection => 'c' => page index of 'c' => 0
pagination.pageIndex(20); //=> invalid => -1
pagination.pageIndex(-10); //=> -1
*/

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;

    this.itemsPerPage = itemsPerPage;

    this.pages = collection.reduce((acc,_,i,a) => {
       if (i % itemsPerPage === 0) {
         acc.push( a.slice(i, i + itemsPerPage) );
       }
       return acc;
    }, []);
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return this.pages.length;
  }

  pageItemCount(pageIndex) {
    return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
  }

  pageIndex(itemIndex) {
    const item = this.collection[itemIndex];

    return this.pages.reduce((pageIndex,currPage,i) => {
      if (currPage.includes(item)) pageIndex = i;

      return pageIndex;
    }, -1);
  }
}


let pagination = new PaginationHelper([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 10);
pagination.pageCount(); //=> 3
pagination.itemCount(); //=> 24
pagination.pageItemCount(0); //=> 10
pagination.pageItemCount(2); //=> 4
pagination.pageItemCount(5); //=> -1
pagination.pageIndex(22); //=> 2
pagination.pageIndex(100); //=> -1
