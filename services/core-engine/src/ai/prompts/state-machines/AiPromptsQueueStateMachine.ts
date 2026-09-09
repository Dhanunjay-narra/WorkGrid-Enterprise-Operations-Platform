export type AiPromptsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsQueueStateMachine {
  private allowedTransitions: Record<AiPromptsQueueState, AiPromptsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsQueueState, to: AiPromptsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsQueueState, to: AiPromptsQueueState): AiPromptsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
