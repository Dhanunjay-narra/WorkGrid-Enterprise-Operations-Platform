export function generateWorkflowNodesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
