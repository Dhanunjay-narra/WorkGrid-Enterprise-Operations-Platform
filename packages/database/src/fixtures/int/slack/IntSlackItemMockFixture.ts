export function generateIntSlackItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
