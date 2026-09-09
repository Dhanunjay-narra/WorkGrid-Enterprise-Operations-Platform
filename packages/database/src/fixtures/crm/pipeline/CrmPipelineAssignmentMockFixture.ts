export function generateCrmPipelineAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
