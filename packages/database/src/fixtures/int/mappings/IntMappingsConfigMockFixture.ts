export function generateIntMappingsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
