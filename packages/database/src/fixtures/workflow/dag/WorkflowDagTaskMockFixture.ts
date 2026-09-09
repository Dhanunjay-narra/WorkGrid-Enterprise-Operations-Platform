export function generateWorkflowDagTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
