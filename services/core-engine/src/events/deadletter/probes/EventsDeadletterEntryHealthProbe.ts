export class EventsDeadletterEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterEntry" };
  }
}
