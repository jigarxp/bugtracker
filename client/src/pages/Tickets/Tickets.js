import React, { useEffect } from 'react';
import BugAddForm from '../../components/Bugs/BugAddForm/BugAddForm';
import BugContainer from '../../components/Bugs/BugContainer/BugContainer';
import BugEditForm from '../../components/Bugs/BugEditForm/BugEditForm';
import BugCurrent from '../../components/Bugs/BugCurrent/BugCurrent';
import './Tickets.scss';
import { useSelector } from 'react-redux';

const Tickets = () => {
  const isCreate = useSelector((store) => store.bug.isCreate);
  const isEdit = useSelector((store) => store.bug.isEdit);

  useEffect(() => {
    document.title = 'Tickets';
  });

  return (
    <div className="tickets">
      <h1>My Tickets</h1>
      <main>
        <BugContainer />
        {isCreate && <BugAddForm />}
        {isEdit && <BugEditForm />}
        <BugCurrent />
      </main>
    </div>
  );
};

export default Tickets;
