export class RbacQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacQueue" };
  }
}
