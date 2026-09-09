export type CrmAccountsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsMetricStateMachine {
  private allowedTransitions: Record<CrmAccountsMetricState, CrmAccountsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsMetricState, to: CrmAccountsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsMetricState, to: CrmAccountsMetricState): CrmAccountsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
