export function generateWorkflowDagMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
