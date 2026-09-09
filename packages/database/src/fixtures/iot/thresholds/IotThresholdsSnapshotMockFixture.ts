export function generateIotThresholdsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
