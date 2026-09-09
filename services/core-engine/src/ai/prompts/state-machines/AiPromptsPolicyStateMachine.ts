export type AiPromptsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsPolicyStateMachine {
  private allowedTransitions: Record<AiPromptsPolicyState, AiPromptsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsPolicyState, to: AiPromptsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsPolicyState, to: AiPromptsPolicyState): AiPromptsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
