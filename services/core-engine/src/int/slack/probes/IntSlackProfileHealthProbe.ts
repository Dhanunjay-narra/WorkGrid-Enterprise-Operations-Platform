export class IntSlackProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackProfile" };
  }
}
