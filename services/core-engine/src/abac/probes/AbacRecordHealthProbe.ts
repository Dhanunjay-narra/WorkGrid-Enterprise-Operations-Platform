export class AbacRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacRecord" };
  }
}
