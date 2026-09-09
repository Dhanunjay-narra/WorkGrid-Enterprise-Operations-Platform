export type IdentityBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityBatchStateMachine {
  private allowedTransitions: Record<IdentityBatchState, IdentityBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityBatchState, to: IdentityBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityBatchState, to: IdentityBatchState): IdentityBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityBatch: " + from + " -> " + to);
    }
    return to;
  }
}
