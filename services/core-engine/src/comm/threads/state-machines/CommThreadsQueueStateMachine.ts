export type CommThreadsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsQueueStateMachine {
  private allowedTransitions: Record<CommThreadsQueueState, CommThreadsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsQueueState, to: CommThreadsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsQueueState, to: CommThreadsQueueState): CommThreadsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
