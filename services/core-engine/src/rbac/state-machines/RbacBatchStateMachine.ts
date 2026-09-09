export type RbacBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacBatchStateMachine {
  private allowedTransitions: Record<RbacBatchState, RbacBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacBatchState, to: RbacBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacBatchState, to: RbacBatchState): RbacBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacBatch: " + from + " -> " + to);
    }
    return to;
  }
}
