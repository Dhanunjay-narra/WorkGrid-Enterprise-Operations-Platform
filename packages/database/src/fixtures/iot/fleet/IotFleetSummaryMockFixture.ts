export function generateIotFleetSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
