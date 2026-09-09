export function generateEventsReplaySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplaySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
