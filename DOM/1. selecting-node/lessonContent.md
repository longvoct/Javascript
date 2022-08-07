1. DOM là gì?

- Document Object Model
- DOM Attribute
- DOM Node

2. Selecting nodes
   2.1 document.querySelector:("selector")
   selector: .header, p, body, #heading,
   const singleNode= document.querySelector("h1")
   => Trả về node
   Ngược lại nếu không có trả về null

   2.2. document.querySelectorAll("selector")
   => Trả về một Nodelist (là một mảng nhưng không phải array)
   Giống: có thể loop -> trả về một danh sách
   Khác: Không sử dụng được những phương thức của mảng
   => Dùng forEach,loop thì được. map,filter thì không

   2.3. document.getElementByClassName("className") -> trả về một HTMLCollection chứa danh sách cách các node, nếu không thì trả về empty
   => Giống NodeList nhưng khác NodeList
   => có thể loop
   => Ít người sử dụng

   2.4. document.getElementByTagName("tagName")
   tags: ul, li, body, a,...
