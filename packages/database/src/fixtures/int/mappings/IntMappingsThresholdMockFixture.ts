export function generateIntMappingsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
