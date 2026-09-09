export function generateIntMappingsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
