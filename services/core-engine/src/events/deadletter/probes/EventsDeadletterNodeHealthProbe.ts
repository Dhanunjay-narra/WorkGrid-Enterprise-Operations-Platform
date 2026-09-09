export class EventsDeadletterNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterNode" };
  }
}
