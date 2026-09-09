export type SupportSlaQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaQueueStateMachine {
  private allowedTransitions: Record<SupportSlaQueueState, SupportSlaQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaQueueState, to: SupportSlaQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaQueueState, to: SupportSlaQueueState): SupportSlaQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaQueue: " + from + " -> " + to);
    }
    return to;
  }
}
