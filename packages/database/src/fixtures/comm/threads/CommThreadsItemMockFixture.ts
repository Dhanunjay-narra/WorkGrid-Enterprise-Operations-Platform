export function generateCommThreadsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
