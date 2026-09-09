export type AiAgentsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsQueueStateMachine {
  private allowedTransitions: Record<AiAgentsQueueState, AiAgentsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsQueueState, to: AiAgentsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsQueueState, to: AiAgentsQueueState): AiAgentsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
