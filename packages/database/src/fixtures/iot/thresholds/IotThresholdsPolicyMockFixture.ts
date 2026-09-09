export function generateIotThresholdsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
