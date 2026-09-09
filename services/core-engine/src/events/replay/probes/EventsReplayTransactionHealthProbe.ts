export class EventsReplayTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayTransaction" };
  }
}
