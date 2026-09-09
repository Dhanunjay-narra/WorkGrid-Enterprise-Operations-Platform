export function generateWorkflowCronsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
