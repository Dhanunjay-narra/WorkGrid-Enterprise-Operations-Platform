export function generateWorkflowVariablesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
