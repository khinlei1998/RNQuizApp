export const ques_data = {
  "questions": [
    {
      "category_id":1,
      "content": "Who is the lead singer of the band Coldplay?",
      "answers": [
        { "key": "A", "content": "Chris Martin" },
        { "key": "B", "content": "Chris Isaak" },
        { "key": "C", "content": "Chris Wallace" },
        { "key": "D", "content": "Chris Connelly" }
      ],
      "correctAnswer": "A"
    },
    {
      "category_id":1,
      "content": "Which song is not by TheFatRat?",
      "answers": [
        { "key": "A", "content": "Monody" },
        { "key": "B", "content": "Ascent" },
        { "key": "C", "content": "Windfall" },
        { "key": "D", "content": "Infinite Power!" }
      ],
      "correctAnswer": "B"
    },
    {
      "category_id":2,
      "content": "Nếu 8 năm trước Cường 32 tuổi thì anh ta bao nhiêu tuổi cách đây x năm?",
      "answers": [
        { "key": "A", "content": "x - 24" },
        { "key": "B", "content": "x - 40" },
        { "key": "C", "content": "24 - x" },
        { "key": "D", "content": "40 - x" }
      ],
      "correctAnswer": "D"
    }
  ]
}

export const categories = [
  { id: 1, name: 'Music',img_name:'music' },
  { id: 2, name: 'Video',img_name:'video' },
  { id: 3, name: 'Language' ,img_name:'globe'},
  { id: 4, name: 'Show' ,img_name:'tv'}
]
