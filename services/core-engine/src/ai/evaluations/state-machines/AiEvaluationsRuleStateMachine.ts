export type AiEvaluationsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsRuleStateMachine {
  private allowedTransitions: Record<AiEvaluationsRuleState, AiEvaluationsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsRuleState, to: AiEvaluationsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsRuleState, to: AiEvaluationsRuleState): AiEvaluationsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsRule: " + from + " -> " + to);
    }
    return to;
  }
}
