export function generateWorkflowDagBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
