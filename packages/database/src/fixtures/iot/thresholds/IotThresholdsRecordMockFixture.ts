export function generateIotThresholdsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
