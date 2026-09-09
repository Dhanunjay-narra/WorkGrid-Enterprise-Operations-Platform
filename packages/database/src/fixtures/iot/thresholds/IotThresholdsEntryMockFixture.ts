export function generateIotThresholdsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
