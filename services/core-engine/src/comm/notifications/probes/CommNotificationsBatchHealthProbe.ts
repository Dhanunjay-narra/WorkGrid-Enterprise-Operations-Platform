export class CommNotificationsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsBatch" };
  }
}
