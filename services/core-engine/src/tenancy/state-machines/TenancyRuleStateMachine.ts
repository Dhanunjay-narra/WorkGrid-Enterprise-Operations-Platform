export type TenancyRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyRuleStateMachine {
  private allowedTransitions: Record<TenancyRuleState, TenancyRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyRuleState, to: TenancyRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyRuleState, to: TenancyRuleState): TenancyRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyRule: " + from + " -> " + to);
    }
    return to;
  }
}
