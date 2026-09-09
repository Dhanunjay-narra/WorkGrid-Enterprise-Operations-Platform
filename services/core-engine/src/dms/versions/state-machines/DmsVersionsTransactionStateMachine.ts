export type DmsVersionsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsTransactionStateMachine {
  private allowedTransitions: Record<DmsVersionsTransactionState, DmsVersionsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsTransactionState, to: DmsVersionsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsTransactionState, to: DmsVersionsTransactionState): DmsVersionsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
