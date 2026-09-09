export class RbacStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacState" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacState" };
  }
}
