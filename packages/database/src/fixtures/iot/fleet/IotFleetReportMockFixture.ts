export function generateIotFleetReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
