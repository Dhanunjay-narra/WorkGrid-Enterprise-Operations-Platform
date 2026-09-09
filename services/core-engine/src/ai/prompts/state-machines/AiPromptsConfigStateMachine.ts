export type AiPromptsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsConfigStateMachine {
  private allowedTransitions: Record<AiPromptsConfigState, AiPromptsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsConfigState, to: AiPromptsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsConfigState, to: AiPromptsConfigState): AiPromptsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
