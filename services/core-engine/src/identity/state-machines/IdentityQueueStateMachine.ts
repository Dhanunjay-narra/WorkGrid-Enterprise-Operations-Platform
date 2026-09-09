export type IdentityQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityQueueStateMachine {
  private allowedTransitions: Record<IdentityQueueState, IdentityQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityQueueState, to: IdentityQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityQueueState, to: IdentityQueueState): IdentityQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityQueue: " + from + " -> " + to);
    }
    return to;
  }
}
