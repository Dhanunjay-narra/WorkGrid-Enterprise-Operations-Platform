export type AiRagQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagQueueStateMachine {
  private allowedTransitions: Record<AiRagQueueState, AiRagQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagQueueState, to: AiRagQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagQueueState, to: AiRagQueueState): AiRagQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagQueue: " + from + " -> " + to);
    }
    return to;
  }
}
