export function generateEventsPartitionsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
