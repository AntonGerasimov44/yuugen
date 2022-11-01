// classes
const statusClasses = ['overdue', 'progress', 'draft', 'finished'];
// ---

function createStatusClass(currentStatus: string, classes: string[]): string {
  const styleClass = classes.filter((status) => {
    if (currentStatus.trim().toLowerCase().includes(status)) {
      return status;
    }
  });
  return styleClass[0];
}

export { statusClasses, createStatusClass };
