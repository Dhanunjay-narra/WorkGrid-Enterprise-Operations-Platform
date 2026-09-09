export type BiDashboardsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsTransactionStateMachine {
  private allowedTransitions: Record<BiDashboardsTransactionState, BiDashboardsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsTransactionState, to: BiDashboardsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsTransactionState, to: BiDashboardsTransactionState): BiDashboardsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
