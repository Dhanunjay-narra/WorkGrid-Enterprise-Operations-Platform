export function generateBiForecastsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
