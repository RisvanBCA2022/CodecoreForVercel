// Import statements
'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByTag } from '@/redux/axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import axios from 'axios';

const Page = () => {
  const { tag } = useParams();
  const [questionByTag, setQuestionByTag] = useState(null);
  const dispatch = useDispatch();
  const questionByTagState = useSelector((state) => state.userslice.questionByTag);

  useEffect(() => {
    dispatch(fetchByTag(tag));
  }, [tag, dispatch]);

  return (
    <div style={styles.main}>
      {questionByTagState.length !== 0 ? (
        <div style={styles.container}>
          <h2>Question List</h2>
          <ul style={styles.questionList}>
            {questionByTagState.map((question) => (
              <li key={question._id} style={styles.questionItem}>
                <h2>{question.questionTitle}</h2>
                <p>{question.questionBody}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='home-container-2'>
          <h1>No Related Questions</h1>
        </div>
      )}
    </div>
  );
};

const styles = {
  main:{
    marginTop:"50px"

  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    display:'flex',
    justifycontent:'center',
    marginTop:"25px",
    textAlign:"center"



  },
  questionList: {
    listStyleType: 'none',
    padding: 0,
  },
  questionItem: {
    marginBottom: '20px',
    border: '1px solid #e5e5e5',
    padding: '20px',
  },
};

// Export the component
export default Page;
