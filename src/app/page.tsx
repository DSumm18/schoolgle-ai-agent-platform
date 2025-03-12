import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { AgentChat } from '@/components/agent-chat';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex-1 p-6">
          <AgentChat />
        </div>
      </div>
    </DashboardLayout>
  );
}