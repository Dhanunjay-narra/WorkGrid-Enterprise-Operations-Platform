export function generateIotLocationsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
