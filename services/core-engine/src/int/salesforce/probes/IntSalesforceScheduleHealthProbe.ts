export class IntSalesforceScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceSchedule" };
  }
}
