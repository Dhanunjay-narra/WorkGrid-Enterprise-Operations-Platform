export function generateCrmForecastingProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
