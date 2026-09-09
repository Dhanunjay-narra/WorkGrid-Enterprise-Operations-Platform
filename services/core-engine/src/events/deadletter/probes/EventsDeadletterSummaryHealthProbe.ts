export class EventsDeadletterSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterSummary" };
  }
}
