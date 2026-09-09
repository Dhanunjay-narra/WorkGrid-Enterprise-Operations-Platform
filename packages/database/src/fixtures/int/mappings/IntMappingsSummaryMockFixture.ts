export function generateIntMappingsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
