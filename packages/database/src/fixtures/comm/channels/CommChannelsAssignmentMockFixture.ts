export function generateCommChannelsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
