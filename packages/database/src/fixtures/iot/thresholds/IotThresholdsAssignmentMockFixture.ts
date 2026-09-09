export function generateIotThresholdsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
