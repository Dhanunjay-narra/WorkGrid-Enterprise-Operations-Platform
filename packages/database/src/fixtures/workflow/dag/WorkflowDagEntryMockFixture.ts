export function generateWorkflowDagEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
