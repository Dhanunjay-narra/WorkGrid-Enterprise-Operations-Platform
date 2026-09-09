export type IntSyncQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncQueueStateMachine {
  private allowedTransitions: Record<IntSyncQueueState, IntSyncQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncQueueState, to: IntSyncQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncQueueState, to: IntSyncQueueState): IntSyncQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncQueue: " + from + " -> " + to);
    }
    return to;
  }
}
