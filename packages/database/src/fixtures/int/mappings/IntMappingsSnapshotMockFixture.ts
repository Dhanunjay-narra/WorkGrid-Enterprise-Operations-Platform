export function generateIntMappingsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
