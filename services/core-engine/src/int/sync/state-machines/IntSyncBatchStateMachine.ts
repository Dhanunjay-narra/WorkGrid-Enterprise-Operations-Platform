export type IntSyncBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncBatchStateMachine {
  private allowedTransitions: Record<IntSyncBatchState, IntSyncBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncBatchState, to: IntSyncBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncBatchState, to: IntSyncBatchState): IntSyncBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncBatch: " + from + " -> " + to);
    }
    return to;
  }
}
