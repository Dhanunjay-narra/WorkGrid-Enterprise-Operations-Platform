export function generateIotThresholdsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
