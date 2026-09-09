export type IntSlackBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackBatchStateMachine {
  private allowedTransitions: Record<IntSlackBatchState, IntSlackBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackBatchState, to: IntSlackBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackBatchState, to: IntSlackBatchState): IntSlackBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackBatch: " + from + " -> " + to);
    }
    return to;
  }
}
