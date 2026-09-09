export function generateWorkflowDagEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
