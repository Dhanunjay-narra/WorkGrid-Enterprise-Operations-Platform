export function generateWorkflowVariablesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
