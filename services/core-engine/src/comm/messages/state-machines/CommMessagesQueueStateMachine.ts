export type CommMessagesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesQueueStateMachine {
  private allowedTransitions: Record<CommMessagesQueueState, CommMessagesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesQueueState, to: CommMessagesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesQueueState, to: CommMessagesQueueState): CommMessagesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
