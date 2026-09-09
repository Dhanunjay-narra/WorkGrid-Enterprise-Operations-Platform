export function generateCommThreadsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
