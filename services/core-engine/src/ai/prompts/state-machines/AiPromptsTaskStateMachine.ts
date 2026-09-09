export type AiPromptsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsTaskStateMachine {
  private allowedTransitions: Record<AiPromptsTaskState, AiPromptsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsTaskState, to: AiPromptsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsTaskState, to: AiPromptsTaskState): AiPromptsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsTask: " + from + " -> " + to);
    }
    return to;
  }
}
