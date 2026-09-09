export type AbacTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacTransactionStateMachine {
  private allowedTransitions: Record<AbacTransactionState, AbacTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacTransactionState, to: AbacTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacTransactionState, to: AbacTransactionState): AbacTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
