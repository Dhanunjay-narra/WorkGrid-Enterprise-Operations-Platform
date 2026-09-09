export function generateIotThresholdsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
