export type SecurityRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityRuleStateMachine {
  private allowedTransitions: Record<SecurityRuleState, SecurityRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityRuleState, to: SecurityRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityRuleState, to: SecurityRuleState): SecurityRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityRule: " + from + " -> " + to);
    }
    return to;
  }
}
