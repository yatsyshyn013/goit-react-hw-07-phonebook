
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
import { ThreeDots } from "react-loader-spinner";




export default function App() {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.contacts.isLoading)
  // const contacts = useSelector(state => state.contacts.items)
  // console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <PhoneBookContainer>
        
      
      
        <h1>PhoneBook</h1>
        <ContactForm/>
        
      <h2>Contacts</h2>
      <Filter />
      
      {isLoading &&     <ThreeDots 
height="80" 
width="80" 
radius="9"
color="grey" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
      />}
      {!isLoading && <>
        
      
      <ContactList /></>}
      
      
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}

