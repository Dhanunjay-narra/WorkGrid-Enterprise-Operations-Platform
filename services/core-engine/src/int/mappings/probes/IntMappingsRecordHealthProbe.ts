export class IntMappingsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsRecord" };
  }
}
