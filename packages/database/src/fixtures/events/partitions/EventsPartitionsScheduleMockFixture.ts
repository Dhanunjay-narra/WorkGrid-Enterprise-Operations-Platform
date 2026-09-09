export function generateEventsPartitionsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
