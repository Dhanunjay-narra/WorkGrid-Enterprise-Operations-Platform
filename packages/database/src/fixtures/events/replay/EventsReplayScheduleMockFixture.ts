export function generateEventsReplayScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplaySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
