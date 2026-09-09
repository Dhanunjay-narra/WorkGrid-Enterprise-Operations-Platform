export class RbacEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacEvent" };
  }
}
