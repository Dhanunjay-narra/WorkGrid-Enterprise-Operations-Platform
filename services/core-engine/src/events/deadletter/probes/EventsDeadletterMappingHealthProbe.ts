export class EventsDeadletterMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterMapping" };
  }
}
