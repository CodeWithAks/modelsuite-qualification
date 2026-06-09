import TalentSidebar from '../../components/talent/TalentSidebar';

const MyTasksPage = () => {
  return (
    <div className="flex min-h-screen" style={{ background: '#050505' }}>
      <TalentSidebar />

      <main
        className="ml-[220px] flex-1 px-8 py-8"
        style={{ maxWidth: 'calc(100vw - 220px)' }}
      >
        <h1 style={{ color: '#F0F0F0', fontSize: '22px', fontWeight: 600 }}>
          My Tasks
        </h1>

        <p style={{ color: '#6B7280', marginTop: '6px', fontSize: '13px' }}>
          View tasks you have claimed and work on submissions.
        </p>

        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #1f1f1f',
            borderRadius: '12px',
            color: '#E5E2E1',
          }}
        >
          No tasks claimed yet.
        </div>
      </main>
    </div>
  );
};

export default MyTasksPage;