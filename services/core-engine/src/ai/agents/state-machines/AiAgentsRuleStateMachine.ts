export type AiAgentsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsRuleStateMachine {
  private allowedTransitions: Record<AiAgentsRuleState, AiAgentsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsRuleState, to: AiAgentsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsRuleState, to: AiAgentsRuleState): AiAgentsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsRule: " + from + " -> " + to);
    }
    return to;
  }
}
