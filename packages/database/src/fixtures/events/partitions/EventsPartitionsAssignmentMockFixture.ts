export function generateEventsPartitionsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
