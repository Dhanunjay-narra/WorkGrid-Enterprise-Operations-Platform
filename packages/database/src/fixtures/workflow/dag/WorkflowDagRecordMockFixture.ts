export function generateWorkflowDagRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
