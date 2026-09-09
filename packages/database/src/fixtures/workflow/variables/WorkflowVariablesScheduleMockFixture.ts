export function generateWorkflowVariablesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
