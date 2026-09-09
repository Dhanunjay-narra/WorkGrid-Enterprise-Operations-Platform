export type SupportQueuesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesQueueStateMachine {
  private allowedTransitions: Record<SupportQueuesQueueState, SupportQueuesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesQueueState, to: SupportQueuesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesQueueState, to: SupportQueuesQueueState): SupportQueuesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
