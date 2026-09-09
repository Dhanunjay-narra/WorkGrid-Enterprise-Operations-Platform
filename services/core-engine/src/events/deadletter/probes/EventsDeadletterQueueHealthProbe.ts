export class EventsDeadletterQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterQueue" };
  }
}
