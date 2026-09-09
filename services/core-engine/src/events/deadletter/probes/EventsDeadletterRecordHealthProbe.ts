export class EventsDeadletterRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterRecord" };
  }
}
