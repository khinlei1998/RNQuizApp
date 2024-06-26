export const ques_data = {
  "questions": [
    {
      "category_id":1,
      "content": "What is the nickname of the US state of California?",
      "answers": [
        { "key": "A", "content": "Golden State" },
        { "key": "B", "content": "Sunshine State" },
        { "key": "C", "content": "Bay State" },
        { "key": "D", "content": "Treasure State" }
      ],
      "correctAnswer": "A"
    },
    {
      "category_id":1,
      "content": "Trong một bài kiểm tra có các câu hỏi bằng điểm nhau. Bạn trả lời sai 10 câu và tổng điểm chỉ đạt 60%. Vậy bài kiểm tra đó có tất cả bao nhiêu câu hỏi?",
      "answers": [
        { "key": "A", "content": "20" },
        { "key": "B", "content": "25" },
        { "key": "C", "content": "30" },
        { "key": "D", "content": "35" }
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
