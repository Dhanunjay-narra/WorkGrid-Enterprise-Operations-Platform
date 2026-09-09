export type DmsChunksTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksTransactionStateMachine {
  private allowedTransitions: Record<DmsChunksTransactionState, DmsChunksTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksTransactionState, to: DmsChunksTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksTransactionState, to: DmsChunksTransactionState): DmsChunksTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
