export class EventsDeadletterItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterItem" };
  }
}
