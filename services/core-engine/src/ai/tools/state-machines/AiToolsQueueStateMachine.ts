export type AiToolsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsQueueStateMachine {
  private allowedTransitions: Record<AiToolsQueueState, AiToolsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsQueueState, to: AiToolsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsQueueState, to: AiToolsQueueState): AiToolsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
