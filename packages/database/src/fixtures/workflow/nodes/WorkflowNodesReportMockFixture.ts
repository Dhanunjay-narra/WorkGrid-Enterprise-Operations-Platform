export function generateWorkflowNodesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
