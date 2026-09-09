export function generateBiWidgetsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
