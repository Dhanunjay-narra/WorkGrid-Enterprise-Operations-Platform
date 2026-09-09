export function generateWorkflowDagItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
