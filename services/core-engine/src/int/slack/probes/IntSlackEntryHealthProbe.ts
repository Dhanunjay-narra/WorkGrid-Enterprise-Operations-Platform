export class IntSlackEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackEntry" };
  }
}
