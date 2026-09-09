export function generateBiWidgetsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
