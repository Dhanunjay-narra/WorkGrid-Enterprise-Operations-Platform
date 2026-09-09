export function generateCommDigestRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
