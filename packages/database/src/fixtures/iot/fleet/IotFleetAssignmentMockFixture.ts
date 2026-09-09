export function generateIotFleetAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
