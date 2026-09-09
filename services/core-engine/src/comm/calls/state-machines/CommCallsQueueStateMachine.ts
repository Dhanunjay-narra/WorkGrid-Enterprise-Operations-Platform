export type CommCallsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsQueueStateMachine {
  private allowedTransitions: Record<CommCallsQueueState, CommCallsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsQueueState, to: CommCallsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsQueueState, to: CommCallsQueueState): CommCallsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
