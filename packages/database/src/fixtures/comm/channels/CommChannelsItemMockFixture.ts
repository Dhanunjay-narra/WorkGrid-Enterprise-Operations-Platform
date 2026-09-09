export function generateCommChannelsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
