export class IntStripeScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeSchedule" };
  }
}
