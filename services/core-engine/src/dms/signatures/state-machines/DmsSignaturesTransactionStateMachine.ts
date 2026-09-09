export type DmsSignaturesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesTransactionStateMachine {
  private allowedTransitions: Record<DmsSignaturesTransactionState, DmsSignaturesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesTransactionState, to: DmsSignaturesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesTransactionState, to: DmsSignaturesTransactionState): DmsSignaturesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
