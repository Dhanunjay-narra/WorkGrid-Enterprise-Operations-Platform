export function generateBiWidgetsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
