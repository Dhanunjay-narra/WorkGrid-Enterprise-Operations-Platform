export function generateWorkflowVariablesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
