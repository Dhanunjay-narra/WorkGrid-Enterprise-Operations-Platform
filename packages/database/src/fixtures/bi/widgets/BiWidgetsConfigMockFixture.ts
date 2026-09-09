export function generateBiWidgetsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
