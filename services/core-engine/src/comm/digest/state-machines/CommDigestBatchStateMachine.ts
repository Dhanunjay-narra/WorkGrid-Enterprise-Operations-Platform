export type CommDigestBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestBatchStateMachine {
  private allowedTransitions: Record<CommDigestBatchState, CommDigestBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestBatchState, to: CommDigestBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestBatchState, to: CommDigestBatchState): CommDigestBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestBatch: " + from + " -> " + to);
    }
    return to;
  }
}
