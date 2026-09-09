export type AiPromptsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsRuleStateMachine {
  private allowedTransitions: Record<AiPromptsRuleState, AiPromptsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsRuleState, to: AiPromptsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsRuleState, to: AiPromptsRuleState): AiPromptsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsRule: " + from + " -> " + to);
    }
    return to;
  }
}
