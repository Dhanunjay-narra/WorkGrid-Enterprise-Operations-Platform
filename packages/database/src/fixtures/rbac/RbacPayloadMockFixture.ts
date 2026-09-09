export function generateRbacPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
