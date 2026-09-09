export type CommMessagesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesBatchStateMachine {
  private allowedTransitions: Record<CommMessagesBatchState, CommMessagesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesBatchState, to: CommMessagesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesBatchState, to: CommMessagesBatchState): CommMessagesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
