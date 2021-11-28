import React, { useState } from 'react';

function DeleteWarning({ children }) {
  const [warning, setWarning] = useState({ visible: false, count: 0 });

  const showWarning = () => {
    setWarning({ visible: true, count: warning.count + 1 });
  };

  const hideWarning = () => {
    setWarning({ ...warning, visible: true });
  };

  const WarningComponent = () => <div>Warning, Delete</div>;

  return children({ warning, showWarning, hideWarning, WarningComponent });
}

export default function DeleteButton() {
  return (
    <DeleteWarning>
      {({ warning, showWarning, hideWarning, WarningComponent }) => (
        <div onMouseEnter={showWarning} onMouseLeave={hideWarning}>
          {warning && warning.visible && WarningComponent}
          <div>Click on this button to delete</div>
          <button>Delete row</button>
        </div>
      )}
    </DeleteWarning>
  );
}

export function DeleteIcon() {
  return (
    <DeleteWarning>
      {({ warning, showWarning, hideWarning, WarningComponent }) => (
        <div onMouseEnter={showWarning} onMouseLeave={hideWarning}>
          {warning && warning.visible && WarningComponent}
          <div>Click on this icon to delete</div>
          <i>Delete row</i>
        </div>
      )}
    </DeleteWarning>
  );
}
