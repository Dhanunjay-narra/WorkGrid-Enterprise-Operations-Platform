export class EventsDeadletterReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterReport" };
  }
}
