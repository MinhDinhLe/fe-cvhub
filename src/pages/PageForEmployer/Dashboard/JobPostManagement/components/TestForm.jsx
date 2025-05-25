import React from 'react';
import { Form, Input, InputNumber, Button, Space, Typography, Card, Divider, Select, Checkbox } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const TestForm = ({ form }) => {
  return (
    <Card bordered={false}>
      <Title level={4}>Bài test tuyển dụng</Title>
      <Form.List name="test">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Card key={key} style={{ marginBottom: 16 }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Form.Item
                    {...restField}
                    name={[name, 'title']}
                    label="Tiêu đề bài test"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
                  >
                    <Input placeholder="Nhập tiêu đề bài test" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    label="Mô tả"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}
                  >
                    <TextArea rows={4} placeholder="Mô tả bài test" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'timeLimit']}
                    label="Thời gian làm bài (phút)"
                    rules={[{ required: true, message: 'Vui lòng nhập thời gian' }]}
                  >
                    <InputNumber min={1} max={180} />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'passingScore']}
                    label="Điểm đạt (0-100)"
                    rules={[{ required: true, message: 'Vui lòng nhập điểm đạt' }]}
                  >
                    <InputNumber min={0} max={100} />
                  </Form.Item>

                  <Divider>Danh sách câu hỏi</Divider>

                  <Form.List name={[name, 'questions']}>
                    {(questionFields, { add: addQuestion, remove: removeQuestion }) => (
                      <>
                        {questionFields.map(({ key: qKey, name: qName, ...qRestField }) => (
                          <Card key={qKey} style={{ marginBottom: 8 }}>
                            <Space direction="vertical" style={{ width: '100%' }}>
                              <Form.Item
                                {...qRestField}
                                name={[qName, 'questionText']}
                                label="Câu hỏi"
                                rules={[{ required: true, message: 'Vui lòng nhập câu hỏi' }]}
                              >
                                <TextArea rows={2} placeholder="Nhập câu hỏi" />
                              </Form.Item>

                              <Form.Item
                                {...qRestField}
                                name={[qName, 'questionType']}
                                label="Loại câu hỏi"
                                rules={[{ required: true, message: 'Vui lòng chọn loại câu hỏi' }]}
                              >
                                <Select>
                                  <Option value="MULTIPLE_CHOICE">Trắc nghiệm nhiều lựa chọn</Option>
                                  <Option value="SINGLE_CHOICE">Trắc nghiệm một lựa chọn</Option>
                                  <Option value="ESSAY">Tự luận</Option>
                                </Select>
                              </Form.Item>

                              <Form.Item
                                {...qRestField}
                                name={[qName, 'points']}
                                label="Điểm"
                                rules={[{ required: true, message: 'Vui lòng nhập điểm' }]}
                              >
                                <InputNumber min={1} max={10} />
                              </Form.Item>

                              <Form.List name={[qName, 'answers']}>
                                {(answerFields, { add: addAnswer, remove: removeAnswer }) => (
                                  <>
                                    {answerFields.map(({ key: aKey, name: aName, ...aRestField }) => (
                                      <Space key={aKey} align="baseline">
                                        <Form.Item
                                          {...aRestField}
                                          name={[aName, 'answerText']}
                                          rules={[{ required: true, message: 'Vui lòng nhập đáp án' }]}
                                        >
                                          <Input placeholder="Nhập đáp án" />
                                        </Form.Item>

                                        <Form.Item
                                          {...aRestField}
                                          name={[aName, 'isCorrect']}
                                          valuePropName="checked"
                                        >
                                          <Checkbox>Đáp án đúng</Checkbox>
                                        </Form.Item>

                                        <MinusCircleOutlined onClick={() => removeAnswer(aName)} />
                                      </Space>
                                    ))}
                                    <Button type="dashed" onClick={() => addAnswer()} block icon={<PlusOutlined />}>
                                      Thêm đáp án
                                    </Button>
                                  </>
                                )}
                              </Form.List>

                              <Button type="link" danger onClick={() => removeQuestion(qName)}>
                                Xóa câu hỏi
                              </Button>
                            </Space>
                          </Card>
                        ))}
                        <Button type="dashed" onClick={() => addQuestion()} block icon={<PlusOutlined />}>
                          Thêm câu hỏi
                        </Button>
                      </>
                    )}
                  </Form.List>

                  <Button type="link" danger onClick={() => remove(name)}>
                    Xóa bài test
                  </Button>
                </Space>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Thêm bài test
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );
};

export default TestForm; 