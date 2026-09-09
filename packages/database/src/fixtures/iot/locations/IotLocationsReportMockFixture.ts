export function generateIotLocationsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
