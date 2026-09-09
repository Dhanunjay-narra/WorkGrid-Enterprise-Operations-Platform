export function generateRbacTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
