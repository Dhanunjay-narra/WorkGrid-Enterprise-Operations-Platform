export function generateCommChannelsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
