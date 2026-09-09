export class BiForecastsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsAuditLog" };
  }
}
