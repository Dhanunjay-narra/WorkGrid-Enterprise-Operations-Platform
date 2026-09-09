export function generateIntMappingsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
