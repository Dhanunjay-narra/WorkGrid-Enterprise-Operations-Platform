export function generateIntOauthThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
