export type SupportAgentsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsRuleStateMachine {
  private allowedTransitions: Record<SupportAgentsRuleState, SupportAgentsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsRuleState, to: SupportAgentsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsRuleState, to: SupportAgentsRuleState): SupportAgentsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsRule: " + from + " -> " + to);
    }
    return to;
  }
}
