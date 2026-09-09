export type DmsRetentionQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionQueueStateMachine {
  private allowedTransitions: Record<DmsRetentionQueueState, DmsRetentionQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionQueueState, to: DmsRetentionQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionQueueState, to: DmsRetentionQueueState): DmsRetentionQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionQueue: " + from + " -> " + to);
    }
    return to;
  }
}
