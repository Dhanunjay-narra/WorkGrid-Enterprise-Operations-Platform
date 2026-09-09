export type RbacQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacQueueStateMachine {
  private allowedTransitions: Record<RbacQueueState, RbacQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacQueueState, to: RbacQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacQueueState, to: RbacQueueState): RbacQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacQueue: " + from + " -> " + to);
    }
    return to;
  }
}
