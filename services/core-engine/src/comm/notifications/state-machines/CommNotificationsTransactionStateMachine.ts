export type CommNotificationsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsTransactionStateMachine {
  private allowedTransitions: Record<CommNotificationsTransactionState, CommNotificationsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsTransactionState, to: CommNotificationsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsTransactionState, to: CommNotificationsTransactionState): CommNotificationsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
