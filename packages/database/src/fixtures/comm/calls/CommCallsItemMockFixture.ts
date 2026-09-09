export function generateCommCallsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
