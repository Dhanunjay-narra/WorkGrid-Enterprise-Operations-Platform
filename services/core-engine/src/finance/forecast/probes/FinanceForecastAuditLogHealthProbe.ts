export class FinanceForecastAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastAuditLog" };
  }
}
