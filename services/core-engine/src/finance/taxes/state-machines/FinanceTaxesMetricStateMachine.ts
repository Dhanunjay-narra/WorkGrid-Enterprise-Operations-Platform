export type FinanceTaxesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesMetricStateMachine {
  private allowedTransitions: Record<FinanceTaxesMetricState, FinanceTaxesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesMetricState, to: FinanceTaxesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesMetricState, to: FinanceTaxesMetricState): FinanceTaxesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
