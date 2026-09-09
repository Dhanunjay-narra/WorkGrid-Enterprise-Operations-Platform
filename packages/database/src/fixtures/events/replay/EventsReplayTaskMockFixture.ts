export function generateEventsReplayTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
