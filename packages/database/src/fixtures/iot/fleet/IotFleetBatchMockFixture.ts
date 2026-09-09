export function generateIotFleetBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
