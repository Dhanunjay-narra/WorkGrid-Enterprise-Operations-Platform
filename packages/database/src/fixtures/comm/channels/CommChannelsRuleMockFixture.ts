export function generateCommChannelsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
