export function generateBiWidgetsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
