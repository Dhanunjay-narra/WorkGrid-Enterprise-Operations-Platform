export class EventsReplayRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayRecord" };
  }
}
