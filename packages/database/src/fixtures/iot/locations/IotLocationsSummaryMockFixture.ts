export function generateIotLocationsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
