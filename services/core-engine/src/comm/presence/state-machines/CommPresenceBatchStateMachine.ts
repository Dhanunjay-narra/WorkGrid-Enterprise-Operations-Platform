export type CommPresenceBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceBatchStateMachine {
  private allowedTransitions: Record<CommPresenceBatchState, CommPresenceBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceBatchState, to: CommPresenceBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceBatchState, to: CommPresenceBatchState): CommPresenceBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceBatch: " + from + " -> " + to);
    }
    return to;
  }
}
