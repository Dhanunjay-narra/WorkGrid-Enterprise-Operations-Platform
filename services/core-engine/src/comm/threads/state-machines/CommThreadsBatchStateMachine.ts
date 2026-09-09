export type CommThreadsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsBatchStateMachine {
  private allowedTransitions: Record<CommThreadsBatchState, CommThreadsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsBatchState, to: CommThreadsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsBatchState, to: CommThreadsBatchState): CommThreadsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
