import { Card } from 'antd'
import React from 'react'

const { Meta } = Card;
const BookCard: React.FC = () => {
  return (
    <Card hoverable style={{ width: 200}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Meta title="48 Laws Of Power" description="A book written by robert greene"/>
    </Card>
  )
}

export default BookCard