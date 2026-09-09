export function generateWorkflowNodesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
