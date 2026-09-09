export function generateWorkflowDagStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
