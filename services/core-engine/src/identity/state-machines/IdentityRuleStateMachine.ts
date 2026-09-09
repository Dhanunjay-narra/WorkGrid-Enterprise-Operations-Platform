export type IdentityRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityRuleStateMachine {
  private allowedTransitions: Record<IdentityRuleState, IdentityRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityRuleState, to: IdentityRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityRuleState, to: IdentityRuleState): IdentityRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityRule: " + from + " -> " + to);
    }
    return to;
  }
}
