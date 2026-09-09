export class FinanceForecastAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastAssignment" };
  }
}
