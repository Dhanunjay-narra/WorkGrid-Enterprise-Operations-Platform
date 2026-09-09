export type CommDigestQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestQueueStateMachine {
  private allowedTransitions: Record<CommDigestQueueState, CommDigestQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestQueueState, to: CommDigestQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestQueueState, to: CommDigestQueueState): CommDigestQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestQueue: " + from + " -> " + to);
    }
    return to;
  }
}
