export function generateIotFleetRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
