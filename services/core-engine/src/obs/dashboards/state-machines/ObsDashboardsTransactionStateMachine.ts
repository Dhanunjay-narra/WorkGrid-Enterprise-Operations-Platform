export type ObsDashboardsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsTransactionStateMachine {
  private allowedTransitions: Record<ObsDashboardsTransactionState, ObsDashboardsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsTransactionState, to: ObsDashboardsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsTransactionState, to: ObsDashboardsTransactionState): ObsDashboardsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
