var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "vector-operations-and-properties",
  "level": "1",
  "url": "vector-operations-and-properties.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector Operations and Properties",
  "body": " Vector Operations and Properties   Vector Notation and Introduction  Your previous journeys into Calculus so far have been generally restricted to experimentation with just , the set of real numbers. You have mastered (hopefully!) derivatives and integrals of functions that take a single real number to a second real number. Calculus III expands on this idea by introducing vectors , which are essentially ordered lists of real numbers.    -Dimensional Real Euclidean Space Define -dimensional real Euclidean space to be the set of all lists of exactly real numbers. In set builder notation, where or is a natural number.   Vector A single element of -dimensional real Euclidean space is called a vector and usually written with a short arrow above it. For example, would describe a vector in . While vertical vectors are often the best for us, to save space you will occasionally see vectors written horizontally with parentheses or angle brackets, that is: all represent the same vector!  We actually need quite a bit of linear algebra to accurately define the definition of the term dimension , but it’s important enough that we’ll give an informal definition here.   Dimension The dimension of a vector space is the number of values needed to exactly describe an object in that vector space. The dimension of a vector is the dimension of the vector space that that vector lives in.  Note that the dimension of is , since we need a list of real numbers to exactly describe a single vector in .  We typically draw vectors in -dimensional Euclidean space as arrows, where the tail of the arrow lies on the origin and the tip of the arrow lies at the point whose coordinates are exactly said vector.    Let and be vectors in , and and . Then we draw and in the Euclidean plane as below:     "
},
{
  "id": "vector-notation-and-introduction-2",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors "
},
{
  "id": "vector-notation-and-introduction-3",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-dimensional real Euclidean space "
},
{
  "id": "vector-notation-and-introduction-4",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "vector-notation-and-introduction-5",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension "
},
{
  "id": "vector-notation-and-introduction-6",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension dimension "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
