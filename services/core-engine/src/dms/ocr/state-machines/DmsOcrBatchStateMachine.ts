export type DmsOcrBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrBatchStateMachine {
  private allowedTransitions: Record<DmsOcrBatchState, DmsOcrBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrBatchState, to: DmsOcrBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrBatchState, to: DmsOcrBatchState): DmsOcrBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrBatch: " + from + " -> " + to);
    }
    return to;
  }
}
