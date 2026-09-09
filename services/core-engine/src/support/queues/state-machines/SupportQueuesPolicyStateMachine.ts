export type SupportQueuesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesPolicyStateMachine {
  private allowedTransitions: Record<SupportQueuesPolicyState, SupportQueuesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesPolicyState, to: SupportQueuesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesPolicyState, to: SupportQueuesPolicyState): SupportQueuesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
