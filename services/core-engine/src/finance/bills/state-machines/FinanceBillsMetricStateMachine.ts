export type FinanceBillsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsMetricStateMachine {
  private allowedTransitions: Record<FinanceBillsMetricState, FinanceBillsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsMetricState, to: FinanceBillsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsMetricState, to: FinanceBillsMetricState): FinanceBillsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
