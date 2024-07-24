function sortCustomername(customers) {
  let n = customers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let customer = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = customer;
      }
    }
  }
  return customers;
}

// ตอบคำถามตรงนี้จ้า 
// O(n**2) เพราะ ในอัลกอริทึมของ bubble sort มีการวนลูปซ้อนกัน 2 ลูป ซึ่งกรณีที่แย่ที่สุดคือจะมีการเข้าถึงครบทุกสมาชิกในทั้ง 2 ลูป ซึ่งแต่ละลูปจะต้องเข้าถึงทั้งหมด n ครั้ง ดังนั้นถ้ามีลูปซ้อนลูป จะต้องเข้าถึงสมาชิกทั้งหมด n*n = n**2 ครั้ง 
