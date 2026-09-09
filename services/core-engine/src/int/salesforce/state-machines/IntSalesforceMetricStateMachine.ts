export type IntSalesforceMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceMetricStateMachine {
  private allowedTransitions: Record<IntSalesforceMetricState, IntSalesforceMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceMetricState, to: IntSalesforceMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceMetricState, to: IntSalesforceMetricState): IntSalesforceMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceMetric: " + from + " -> " + to);
    }
    return to;
  }
}
