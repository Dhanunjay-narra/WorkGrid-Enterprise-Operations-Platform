export type SupportAgentsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsQueueStateMachine {
  private allowedTransitions: Record<SupportAgentsQueueState, SupportAgentsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsQueueState, to: SupportAgentsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsQueueState, to: SupportAgentsQueueState): SupportAgentsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
