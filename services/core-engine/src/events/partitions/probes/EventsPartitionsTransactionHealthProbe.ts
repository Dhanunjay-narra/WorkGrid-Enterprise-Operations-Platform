export class EventsPartitionsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsTransaction" };
  }
}
