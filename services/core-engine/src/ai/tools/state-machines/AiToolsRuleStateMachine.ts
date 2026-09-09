export type AiToolsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsRuleStateMachine {
  private allowedTransitions: Record<AiToolsRuleState, AiToolsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsRuleState, to: AiToolsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsRuleState, to: AiToolsRuleState): AiToolsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsRule: " + from + " -> " + to);
    }
    return to;
  }
}
