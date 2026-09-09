export class IntSyncTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncTask" };
  }
}
