import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Paper)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.spacing(3),
   // Similar to main-bar background color
  border: 'solid 1px #edeff0', // Similar to main-bar border color
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Similar to main-bar box shadow
  borderRadius: theme.shape.borderRadius,
}));

const QuestionList = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  padding: 0,
  background: '#eefde2',
}));

const QuestionItem = styled('li')(({ theme }) => ({
  marginBottom: theme.spacing(4), // Increased margin at the bottom
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`, // You can adjust this to match your design
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#edeff0', // Similar to main-bar hover color
  },
}));

const AdminQuestionlist = ({ questionList }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ color: '#037ecb' }}>
        Question List
      </Typography>
      <QuestionList>
        {questionList.map((question) => (
          <QuestionItem key={question._id}>
            <Typography variant="h5" gutterBottom style={{ color: '#037ecb' }}>
              {question.questionTitle}
            </Typography>
            <Typography variant="body1" style={{ color: '#39739d' }}>
              {question.questionBody}
            </Typography>
          </QuestionItem>
        ))}
      </QuestionList>
    </Container>
  );
};

export default AdminQuestionlist;
