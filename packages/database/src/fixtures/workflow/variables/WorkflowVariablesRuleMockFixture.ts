export function generateWorkflowVariablesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
