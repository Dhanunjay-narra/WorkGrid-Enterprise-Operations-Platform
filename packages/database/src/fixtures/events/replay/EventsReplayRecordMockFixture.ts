export function generateEventsReplayRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
