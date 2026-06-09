import Sidebar from '../../components/admin/Sidebar';

const TalentsPage = () => {
  return (
    <div className="flex min-h-screen" style={{ background: '#050505' }}>
      <Sidebar />

      <main
        className="ml-[240px] flex-1 px-8 py-8"
        style={{ maxWidth: 'calc(100vw - 240px)' }}
      >
        <h1
          className="font-display text-[22px] font-semibold"
          style={{ color: '#F0F0F0' }}
        >
          Talent Management
        </h1>

        <p className="mt-1 text-[13px]" style={{ color: '#6B7280' }}>
          View and manage registered talents.
        </p>

        <div className="mt-6 p-6 rounded-xl border border-gray-800">
          <p style={{ color: '#E5E2E1' }}>
            Talent management page coming soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TalentsPage;