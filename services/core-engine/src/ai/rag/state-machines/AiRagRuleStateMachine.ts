export type AiRagRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagRuleStateMachine {
  private allowedTransitions: Record<AiRagRuleState, AiRagRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagRuleState, to: AiRagRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagRuleState, to: AiRagRuleState): AiRagRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagRule: " + from + " -> " + to);
    }
    return to;
  }
}
