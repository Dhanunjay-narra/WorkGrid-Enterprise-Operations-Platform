export type ComplianceRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceRuleStateMachine {
  private allowedTransitions: Record<ComplianceRuleState, ComplianceRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceRuleState, to: ComplianceRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceRuleState, to: ComplianceRuleState): ComplianceRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceRule: " + from + " -> " + to);
    }
    return to;
  }
}
