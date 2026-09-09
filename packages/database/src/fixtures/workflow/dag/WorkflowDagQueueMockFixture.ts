export function generateWorkflowDagQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
