export class FinanceTaxesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesAssignment" };
  }
}
