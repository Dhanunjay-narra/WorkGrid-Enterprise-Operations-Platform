export type ObsAlertsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsTransactionStateMachine {
  private allowedTransitions: Record<ObsAlertsTransactionState, ObsAlertsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsTransactionState, to: ObsAlertsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsTransactionState, to: ObsAlertsTransactionState): ObsAlertsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
