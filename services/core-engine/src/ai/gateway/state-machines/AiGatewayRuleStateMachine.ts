export type AiGatewayRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayRuleStateMachine {
  private allowedTransitions: Record<AiGatewayRuleState, AiGatewayRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayRuleState, to: AiGatewayRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayRuleState, to: AiGatewayRuleState): AiGatewayRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayRule: " + from + " -> " + to);
    }
    return to;
  }
}
