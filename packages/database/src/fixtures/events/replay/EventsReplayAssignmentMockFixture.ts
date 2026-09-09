export function generateEventsReplayAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
