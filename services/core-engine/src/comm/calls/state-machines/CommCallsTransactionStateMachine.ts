export type CommCallsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsTransactionStateMachine {
  private allowedTransitions: Record<CommCallsTransactionState, CommCallsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsTransactionState, to: CommCallsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsTransactionState, to: CommCallsTransactionState): CommCallsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
