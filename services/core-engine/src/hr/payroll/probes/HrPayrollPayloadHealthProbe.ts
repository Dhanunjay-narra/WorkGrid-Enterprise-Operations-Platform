export class HrPayrollPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollPayload" };
  }
}
