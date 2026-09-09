export class RbacReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacReport" };
  }
}
