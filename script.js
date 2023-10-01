const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	// Initialize a count variable to keep track of the number of books read
    let count = 0;

    // Iterate through the library array
    for (let i = 0; i < library.length; i++) {
        // Check if the current book's readingStatus is true (i.e., it has been read)
        if (library[i].readingStatus === true) {
            // Increment the count if the book has been read
            count++;
        }
    }

    // Return the count of books that have been read
    return count;

};

// Do not change the code below

alert(numberOfBooksRead());
