export type BiQueriesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesTransactionStateMachine {
  private allowedTransitions: Record<BiQueriesTransactionState, BiQueriesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesTransactionState, to: BiQueriesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesTransactionState, to: BiQueriesTransactionState): BiQueriesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
