var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "vector-operations-and-properties",
  "level": "1",
  "url": "vector-operations-and-properties.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vector Operations and Properties",
  "body": " Vector Operations and Properties   Vector Notation and Introduction  Your previous journeys into Calculus so far have been generally restricted to experimentation with just , the set of real numbers. You have mastered (hopefully!) derivatives and integrals of functions that take a single real number to a second real number. Calculus III expands on this idea by introducing vectors , which are essentially ordered lists of real numbers.  -Dimensional Real Euclidean Space -Dimensional Real Euclidean Space  Define -dimensional real Euclidean space to be the set of all lists of exactly real numbers. In set builder notation, where or is a natural number.  Vector Vector  A single element of -dimensional real Euclidean space is called a vector and usually written with a short arrow above it. For example, would describe a vector in . While vertical vectors are often the best for us, to save space you will occasionally see vectors written horizontally with parentheses or angle brackets, that is: all represent the same vector!  We actually need quite a bit of linear algebra to accurately define the definition of the term dimension , but it’s important enough that we’ll give an informal definition here.  Dimension Dimension  The dimension of a vector space is the number of values needed to exactly describe an object in that vector space. The dimension of a vector is the dimension of the vector space that that vector lives in.  Note that the dimension of is , since we need a list of real numbers to exactly describe a single vector in .  We typically draw vectors in -dimensional Euclidean space as arrows, where the tail of the arrow lies on the origin and the tip of the arrow lies at the point whose coordinates are exactly said vector.   Let and be vectors in , and and . Then we draw and in the Euclidean plane as below:  Vectors in standard position.   image of the the two vectors described earlier in standard position         "
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
  "type": "Definition",
  "number": "1.1.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-Dimensional Real Euclidean Space.",
  "body": "-Dimensional Real Euclidean Space -Dimensional Real Euclidean Space  Define -dimensional real Euclidean space to be the set of all lists of exactly real numbers. In set builder notation, where or is a natural number. "
},
{
  "id": "vector-notation-and-introduction-4",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-4",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Vector.",
  "body": "Vector Vector  A single element of -dimensional real Euclidean space is called a vector and usually written with a short arrow above it. For example, would describe a vector in . While vertical vectors are often the best for us, to save space you will occasionally see vectors written horizontally with parentheses or angle brackets, that is: all represent the same vector! "
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
  "type": "Definition",
  "number": "1.1.3",
  "title": "Dimension.",
  "body": "Dimension Dimension  The dimension of a vector space is the number of values needed to exactly describe an object in that vector space. The dimension of a vector is the dimension of the vector space that that vector lives in. "
},
{
  "id": "vector-notation-and-introduction-9",
  "level": "2",
  "url": "vector-operations-and-properties.html#vector-notation-and-introduction-9",
  "type": "Example",
  "number": "1.1.4",
  "title": "<span class=\"process-math\">\\(n=2\\)<\/span>.",
  "body": " Let and be vectors in , and and . Then we draw and in the Euclidean plane as below:  Vectors in standard position.   image of the the two vectors described earlier in standard position       "
},
{
  "id": "basic-vector-operations",
  "level": "1",
  "url": "basic-vector-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Basic Vector Operations",
  "body": " Basic Vector Operations  We have a few vector operations that are worth mentioning. We start with what are called “unary\" operators, or operations that only require a single input. Examples of unary operators on the real numbers are negation (i.e. turning into ), or reciprocation (i.e. turning into ). The first unary operator we’ll look at for vectors is magnitude .  Magnitude Magnitude  Let be an -dimensional vector, that is . Then the magnitude of is:   Magnitudes  Find the magnitude for the following vectors:                           .     .     .     .     A related definition is that of the unit vector . Technically you can think of this as a unary operation that takes a vector and returns the unit version of that vector.  Unit Vector  We say that is a unit vector if . We can find a unit vector that is parallel (has the same direction) of by dividing by its own magnitude. That is:   Zero Vector  We say that is the zero vector if , and we write .  The second important unary operation is negation .  Vector Negation  Let , that is, . Then .  Then that brings us into our second category of operations, “binary\" operators, or operators that require two inputs. Examples of binary operators on real numbers are addition, multiplication, etc. We see analogues for these for vectors in vector addition and scalar multiplication.  Vector Addition  Let and be two vectors in . Then to add these two vectors, we add the corresponding coordinates. That is,   Scalar Multiplication  Given a vector in and a number in (called a scalar), their product is defined by distributing the scalar to each coordinate of the vector. That is,   The way we add vectors is “timewise\". Vectors are typically drawn as arrows with a length(magnitude) and direction. If we place the tail of the vector on the origin, the tip of the arrow would land at the point .    Vectors in standard position.   graph of two vectors, u and v.      Geometrically, to add two vectors, we follow one, then follow the other. That is, we place them tail to tip:   Vector sum.   graph of the sum of two vectors, u and v.      For a 3d example, look here .  Note, commutativity holds! If we follow first, then , we end up at the same spot as if we followed first then . In fact, this makes a parallelogram.  The vector drawn from the starting point to the ending point is exactly the sum of the two vectors. The difference of two vectors can be found from the same triangle as the sum:   Vector difference.   graph of the difference of two vectors, u and v.      For a 3d example, look here .  Here, . Then it follows that . That is, the difference between two vectors is the vector that goes from the tip of the second (“negative\") vector to the tip of the second (“positive\") vector.  To multiply a vector by a scalar, we just scale the vector. In other words, the magnitude of the vector increases or decreases. For example:   Scalar multiplication.   paired graph of the vectors u and 2u.      If that scalar is negative, the direction of the vector reverses! This is similar to how negative numbers go in the opposite direction of positive numbers along the number line. Another way of verifying this is that if you add , you should get the 0 vector, ! In , .   Negation   paired graph of the vectors u and -2u.      Here, is in the opposite direction of , and twice as long!  Operating on Vectors Geometrically Consider the Geogebra interactive below. You can change the vectors and by dragging the dots at their endpoints. You can move the vectors and around by dragging the vectors themselves.  Vector Sandbox by Steve Phelps powered by Geogebra     Drag the vectors and such that they are tail to tip. What do you observe about the length between the tail of and the tip of . What happens if you switch the order of the two vectors?    Drag the vectors and such that the tails of and coincide. How does this relate to ? What about ?    Find the following:                 .     .     Note that we can write vectors in an alternative way using what are called elementary basis vectors .  Elementary Basis Vectors in and  In , we define two elementary basis vectors as In , we define three elementary basis vectors as   We can decompose vectors into sums of elementary basis vectors:   Let Then we can write   "
},
{
  "id": "basic-vector-operations-2",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude "
},
{
  "id": "magnitude",
  "level": "2",
  "url": "basic-vector-operations.html#magnitude",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Magnitude.",
  "body": "Magnitude Magnitude  Let be an -dimensional vector, that is . Then the magnitude of is:  "
},
{
  "id": "basic-vector-operations-4",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-4",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "Magnitudes.",
  "body": "Magnitudes  Find the magnitude for the following vectors:                           .     .     .     .    "
},
{
  "id": "basic-vector-operations-5",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vector "
},
{
  "id": "basic-vector-operations-6",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-6",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Unit Vector.",
  "body": "Unit Vector  We say that is a unit vector if . We can find a unit vector that is parallel (has the same direction) of by dividing by its own magnitude. That is:  "
},
{
  "id": "basic-vector-operations-7",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-7",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Zero Vector.",
  "body": "Zero Vector  We say that is the zero vector if , and we write . "
},
{
  "id": "basic-vector-operations-8",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negation "
},
{
  "id": "basic-vector-operations-9",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-9",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Vector Negation.",
  "body": "Vector Negation  Let , that is, . Then . "
},
{
  "id": "basic-vector-operations-11",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-11",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Vector Addition.",
  "body": "Vector Addition  Let and be two vectors in . Then to add these two vectors, we add the corresponding coordinates. That is,  "
},
{
  "id": "basic-vector-operations-12",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-12",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Scalar Multiplication.",
  "body": "Scalar Multiplication  Given a vector in and a number in (called a scalar), their product is defined by distributing the scalar to each coordinate of the vector. That is,  "
},
{
  "id": "basic-vector-operations-14",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-14",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": " Vectors in standard position.   graph of two vectors, u and v.    "
},
{
  "id": "basic-vector-operations-16",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-16",
  "type": "Figure",
  "number": "1.2.9",
  "title": "",
  "body": " Vector sum.   graph of the sum of two vectors, u and v.    "
},
{
  "id": "basic-vector-operations-20",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-20",
  "type": "Figure",
  "number": "1.2.10",
  "title": "",
  "body": " Vector difference.   graph of the difference of two vectors, u and v.    "
},
{
  "id": "basic-vector-operations-24",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-24",
  "type": "Figure",
  "number": "1.2.11",
  "title": "",
  "body": " Scalar multiplication.   paired graph of the vectors u and 2u.    "
},
{
  "id": "basic-vector-operations-26",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-26",
  "type": "Figure",
  "number": "1.2.12",
  "title": "",
  "body": " Negation   paired graph of the vectors u and -2u.    "
},
{
  "id": "basic-vector-operations-28",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-28",
  "type": "Exercise",
  "number": "1.2.13",
  "title": "Operating on Vectors Geometrically.",
  "body": "Operating on Vectors Geometrically Consider the Geogebra interactive below. You can change the vectors and by dragging the dots at their endpoints. You can move the vectors and around by dragging the vectors themselves.  Vector Sandbox by Steve Phelps powered by Geogebra     Drag the vectors and such that they are tail to tip. What do you observe about the length between the tail of and the tip of . What happens if you switch the order of the two vectors?    Drag the vectors and such that the tails of and coincide. How does this relate to ? What about ?   "
},
{
  "id": "basic-vector-operations-29",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-29",
  "type": "Exercise",
  "number": "1.2.15",
  "title": "",
  "body": "Find the following:                 .     .    "
},
{
  "id": "basic-vector-operations-30",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary basis vectors "
},
{
  "id": "basic-vector-operations-31",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-31",
  "type": "Definition",
  "number": "1.2.16",
  "title": "Elementary Basis Vectors in <span class=\"process-math\">\\(\\bbr^2\\)<\/span> and <span class=\"process-math\">\\(\\bbr^3\\)<\/span>.",
  "body": "Elementary Basis Vectors in and  In , we define two elementary basis vectors as In , we define three elementary basis vectors as  "
},
{
  "id": "basic-vector-operations-33",
  "level": "2",
  "url": "basic-vector-operations.html#basic-vector-operations-33",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": " Let Then we can write  "
},
{
  "id": "dot-product",
  "level": "1",
  "url": "dot-product.html",
  "type": "Section",
  "number": "1.3",
  "title": "Dot Product",
  "body": " Dot Product  You may have noticed that while we can add and subtract vectors, and we can multiply them by scalars, there is no allowance for multiplying or dividing two vectors. In general, there is no requirement for a well-defined product of two vectors in a vector space. However, there are a couple of useful “product\" operations that show up with real-valued vectors. One of these is called the dot product .   Definition of Dot Product Let and be two vectors in . Then the dot product of and is defined as:   Find the following dot products:                       The Law of Cosines and the Dot Product Sometimes, given two vectors , with angle between them the expression is referred to as \"the dot product version of the law of cosines\". Why? Let’s find out. We’ll start by constructing a vector triangle, placing and in standard position:  The Law of Cosines.   graph with the aboved described elements.      What is the purple vector (from the tip of to the tip of )? Hint: Think about the geometric difference of two vectors.    What are the lengths of the three sides of this triangle? Hint: The length of a vector is its magnitude .    Using the Law of Cosines, write an expression relating your three side lengths and .    Show that this expression simplifies to Hint: Leave alone for now, but expand out all of the other magnitudes using the magnitude formula, expand, then see if anything cancels.    Note that this rule does not just hold in but in all . So in fact, the dot product can be used to identify the angle between two given vectors in any . This is particularly useful when we’re deciding if two vectors are orthogonal , that is, if they have an angle of between them.  Use the dot product to find the following angles.   Let and let . Find the angle between and .    Let and let . Find the angle between and .    "
},
{
  "id": "dot-product-2",
  "level": "2",
  "url": "dot-product.html#dot-product-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "dot-product-3",
  "level": "2",
  "url": "dot-product.html#dot-product-3",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": " Definition of Dot Product Let and be two vectors in . Then the dot product of and is defined as:  "
},
{
  "id": "dot-product-4",
  "level": "2",
  "url": "dot-product.html#dot-product-4",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "Find the following dot products:                      "
},
{
  "id": "dot-product-5",
  "level": "2",
  "url": "dot-product.html#dot-product-5",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "The Law of Cosines and the Dot Product.",
  "body": "The Law of Cosines and the Dot Product Sometimes, given two vectors , with angle between them the expression is referred to as \"the dot product version of the law of cosines\". Why? Let’s find out. We’ll start by constructing a vector triangle, placing and in standard position:  The Law of Cosines.   graph with the aboved described elements.      What is the purple vector (from the tip of to the tip of )? Hint: Think about the geometric difference of two vectors.    What are the lengths of the three sides of this triangle? Hint: The length of a vector is its magnitude .    Using the Law of Cosines, write an expression relating your three side lengths and .    Show that this expression simplifies to Hint: Leave alone for now, but expand out all of the other magnitudes using the magnitude formula, expand, then see if anything cancels.   "
},
{
  "id": "dot-product-6",
  "level": "2",
  "url": "dot-product.html#dot-product-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "dot-product-7",
  "level": "2",
  "url": "dot-product.html#dot-product-7",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "Use the dot product to find the following angles.   Let and let . Find the angle between and .    Let and let . Find the angle between and .   "
},
{
  "id": "vectoroperations-ch",
  "level": "1",
  "url": "vectoroperations-ch.html",
  "type": "Chapter",
  "number": "2",
  "title": "Vector Operations and Properties",
  "body": " Vector Operations and Properties   "
},
{
  "id": "line-integrals",
  "level": "1",
  "url": "line-integrals.html",
  "type": "Section",
  "number": "3.1",
  "title": "Line Integrals",
  "body": " Line Integrals   Vector Fields  This semester we started with vector functions, or functions from . Next, we studied surfaces, or functions from . We conclude the semester by studying vector fields, which are functions from . In particular, we’ll be looking at vector fields from and vector fields from .  Vector Field in -Dimensions -Dimensional Vector Field  Let be a function from such that We call a vector field from to .  Vector Field in -Dimensions -Dimensional Vector Field  Vector Field in -Dimensions Let be a function from such that We call a vector field from to .  As a note, we have actually already seen functions that were secretly vector fields. If you have some , then is a 2-dimensional vector field.  Vector fields are often graphed by taking the domain, then picking some arbitrary points in the domain and drawing the resulting vector of that coordinates at that point in the domain. That is, to graph the vector field we would plot the vector at , the vector at and so on and so forth. We often scale the vectors that we plot for clarity.  A -Dimensional Vector Field  Let A plot of this vector field can be generated using SageMath at SageMathCell with the code below.   x,y = var('x y') plot_vector_field((-y,x), (x,-3,3), (y,-3,3))   is below:         A Gradient Vector Field Let . You should recognize this surface as the top half of the sphere with radius 1. But we can find and plot that as a -dimensional vector field. Then we can graph as a vector field:   When referring to a vector field that comes from the gradient of a function, that is some , then is the gradient field and is the potential function . If is a vector field such that there exists some such that , then we say that is a conservative vector field.   Vector Fields For the following vector fields, generate a graph that has at least 5 vectors. You choose the points!     .     .     Gradient Vector Fields For the following functions, give the associated gradient vector field.     .     .     "
},
{
  "id": "vector-fields-3",
  "level": "2",
  "url": "line-integrals.html#vector-fields-3",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Vector Field in <span class=\"process-math\">\\(2\\)<\/span>-Dimensions.",
  "body": "Vector Field in -Dimensions -Dimensional Vector Field  Let be a function from such that We call a vector field from to . "
},
{
  "id": "vector-fields-4",
  "level": "2",
  "url": "line-integrals.html#vector-fields-4",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Vector Field in <span class=\"process-math\">\\(3\\)<\/span>-Dimensions.",
  "body": "Vector Field in -Dimensions -Dimensional Vector Field  Vector Field in -Dimensions Let be a function from such that We call a vector field from to . "
},
{
  "id": "vector-fields-7",
  "level": "2",
  "url": "line-integrals.html#vector-fields-7",
  "type": "Example",
  "number": "3.1.3",
  "title": "A <span class=\"process-math\">\\(2\\)<\/span>-Dimensional Vector Field.",
  "body": "A -Dimensional Vector Field  Let A plot of this vector field can be generated using SageMath at SageMathCell with the code below.   x,y = var('x y') plot_vector_field((-y,x), (x,-3,3), (y,-3,3))   is below:       "
},
{
  "id": "vector-fields-9",
  "level": "2",
  "url": "line-integrals.html#vector-fields-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient field potential function conservative "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
