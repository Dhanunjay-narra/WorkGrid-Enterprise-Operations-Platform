export type CommCallsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsBatchStateMachine {
  private allowedTransitions: Record<CommCallsBatchState, CommCallsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsBatchState, to: CommCallsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsBatchState, to: CommCallsBatchState): CommCallsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
