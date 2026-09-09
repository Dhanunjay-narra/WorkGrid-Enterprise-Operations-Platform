export function generateWorkflowDagSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
