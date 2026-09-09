export function generateIotFleetStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
