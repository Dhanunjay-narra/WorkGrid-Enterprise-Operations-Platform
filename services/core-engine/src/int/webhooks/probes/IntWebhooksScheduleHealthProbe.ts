export class IntWebhooksScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksSchedule" };
  }
}
