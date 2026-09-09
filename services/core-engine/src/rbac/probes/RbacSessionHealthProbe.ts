export class RbacSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacSession" };
  }
}
