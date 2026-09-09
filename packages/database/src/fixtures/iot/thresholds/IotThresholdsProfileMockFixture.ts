export function generateIotThresholdsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
