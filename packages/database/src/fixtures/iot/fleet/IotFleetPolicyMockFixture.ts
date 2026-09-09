export function generateIotFleetPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
