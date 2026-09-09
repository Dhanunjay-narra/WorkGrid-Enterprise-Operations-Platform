export type CommThreadsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsTransactionStateMachine {
  private allowedTransitions: Record<CommThreadsTransactionState, CommThreadsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsTransactionState, to: CommThreadsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsTransactionState, to: CommThreadsTransactionState): CommThreadsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
