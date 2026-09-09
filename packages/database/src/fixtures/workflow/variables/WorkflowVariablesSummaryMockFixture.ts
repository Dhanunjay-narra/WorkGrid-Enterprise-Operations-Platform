export function generateWorkflowVariablesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
