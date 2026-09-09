export function generateAuthThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
