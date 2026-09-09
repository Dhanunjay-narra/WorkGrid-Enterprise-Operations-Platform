export type DmsOcrTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrTransactionStateMachine {
  private allowedTransitions: Record<DmsOcrTransactionState, DmsOcrTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrTransactionState, to: DmsOcrTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrTransactionState, to: DmsOcrTransactionState): DmsOcrTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
