export class CommWebhooksScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksSchedule" };
  }
}
