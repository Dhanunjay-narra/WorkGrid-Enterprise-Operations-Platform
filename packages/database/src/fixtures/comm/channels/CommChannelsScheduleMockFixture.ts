export function generateCommChannelsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
