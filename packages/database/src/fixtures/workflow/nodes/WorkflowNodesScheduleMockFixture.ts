export function generateWorkflowNodesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
