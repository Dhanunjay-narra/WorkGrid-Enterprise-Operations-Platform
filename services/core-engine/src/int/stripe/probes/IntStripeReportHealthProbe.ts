export class IntStripeReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeReport" };
  }
}
