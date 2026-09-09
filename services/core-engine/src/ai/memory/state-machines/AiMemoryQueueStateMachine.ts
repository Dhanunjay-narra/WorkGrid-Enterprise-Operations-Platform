export type AiMemoryQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryQueueStateMachine {
  private allowedTransitions: Record<AiMemoryQueueState, AiMemoryQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryQueueState, to: AiMemoryQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryQueueState, to: AiMemoryQueueState): AiMemoryQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryQueue: " + from + " -> " + to);
    }
    return to;
  }
}
