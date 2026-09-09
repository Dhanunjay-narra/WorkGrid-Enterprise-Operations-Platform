export type DmsRetentionBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionBatchStateMachine {
  private allowedTransitions: Record<DmsRetentionBatchState, DmsRetentionBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionBatchState, to: DmsRetentionBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionBatchState, to: DmsRetentionBatchState): DmsRetentionBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionBatch: " + from + " -> " + to);
    }
    return to;
  }
}
