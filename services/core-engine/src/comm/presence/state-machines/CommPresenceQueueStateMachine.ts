export type CommPresenceQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceQueueStateMachine {
  private allowedTransitions: Record<CommPresenceQueueState, CommPresenceQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceQueueState, to: CommPresenceQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceQueueState, to: CommPresenceQueueState): CommPresenceQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceQueue: " + from + " -> " + to);
    }
    return to;
  }
}
