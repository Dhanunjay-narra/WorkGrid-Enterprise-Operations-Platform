export type IntSlackTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackTransactionStateMachine {
  private allowedTransitions: Record<IntSlackTransactionState, IntSlackTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackTransactionState, to: IntSlackTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackTransactionState, to: IntSlackTransactionState): IntSlackTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
