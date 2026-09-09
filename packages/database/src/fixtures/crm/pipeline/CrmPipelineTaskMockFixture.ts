export function generateCrmPipelineTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
