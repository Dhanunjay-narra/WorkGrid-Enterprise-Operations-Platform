export function generateWorkflowDagProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
