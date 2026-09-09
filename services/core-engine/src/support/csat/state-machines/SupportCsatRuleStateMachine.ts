export type SupportCsatRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatRuleStateMachine {
  private allowedTransitions: Record<SupportCsatRuleState, SupportCsatRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatRuleState, to: SupportCsatRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatRuleState, to: SupportCsatRuleState): SupportCsatRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatRule: " + from + " -> " + to);
    }
    return to;
  }
}
