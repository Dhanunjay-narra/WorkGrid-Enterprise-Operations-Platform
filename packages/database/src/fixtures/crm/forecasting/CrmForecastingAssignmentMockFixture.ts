export function generateCrmForecastingAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
