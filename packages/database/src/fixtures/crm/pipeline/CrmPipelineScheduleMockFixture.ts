export function generateCrmPipelineScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
