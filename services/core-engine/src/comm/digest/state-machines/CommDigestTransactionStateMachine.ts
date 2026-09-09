export type CommDigestTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestTransactionStateMachine {
  private allowedTransitions: Record<CommDigestTransactionState, CommDigestTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestTransactionState, to: CommDigestTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestTransactionState, to: CommDigestTransactionState): CommDigestTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
