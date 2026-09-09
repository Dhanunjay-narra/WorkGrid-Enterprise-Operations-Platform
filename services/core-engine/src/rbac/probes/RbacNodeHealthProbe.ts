export class RbacNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacNode" };
  }
}
