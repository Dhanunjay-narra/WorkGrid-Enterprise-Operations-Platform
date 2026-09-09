export type CommMessagesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesTransactionStateMachine {
  private allowedTransitions: Record<CommMessagesTransactionState, CommMessagesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesTransactionState, to: CommMessagesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesTransactionState, to: CommMessagesTransactionState): CommMessagesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
