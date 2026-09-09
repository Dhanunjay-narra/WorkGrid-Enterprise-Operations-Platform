export function generateWorkflowDagConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
