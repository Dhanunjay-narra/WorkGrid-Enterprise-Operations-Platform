export type SupportEscalationQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationQueueStateMachine {
  private allowedTransitions: Record<SupportEscalationQueueState, SupportEscalationQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationQueueState, to: SupportEscalationQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationQueueState, to: SupportEscalationQueueState): SupportEscalationQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationQueue: " + from + " -> " + to);
    }
    return to;
  }
}
