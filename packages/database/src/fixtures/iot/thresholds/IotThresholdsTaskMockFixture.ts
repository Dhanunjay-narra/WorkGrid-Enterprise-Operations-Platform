export function generateIotThresholdsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
