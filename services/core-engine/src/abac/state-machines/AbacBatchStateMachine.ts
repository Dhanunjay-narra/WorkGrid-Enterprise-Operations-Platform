export type AbacBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacBatchStateMachine {
  private allowedTransitions: Record<AbacBatchState, AbacBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacBatchState, to: AbacBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacBatchState, to: AbacBatchState): AbacBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacBatch: " + from + " -> " + to);
    }
    return to;
  }
}
