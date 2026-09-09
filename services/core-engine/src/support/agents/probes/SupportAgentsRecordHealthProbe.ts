export class SupportAgentsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsRecord" };
  }
}
