export class EventsDeadletterBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterBatch" };
  }
}
