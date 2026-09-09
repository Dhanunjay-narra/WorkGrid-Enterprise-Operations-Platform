export type AiPromptsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsMappingStateMachine {
  private allowedTransitions: Record<AiPromptsMappingState, AiPromptsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsMappingState, to: AiPromptsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsMappingState, to: AiPromptsMappingState): AiPromptsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
