export type SupportEscalationRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationRuleStateMachine {
  private allowedTransitions: Record<SupportEscalationRuleState, SupportEscalationRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationRuleState, to: SupportEscalationRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationRuleState, to: SupportEscalationRuleState): SupportEscalationRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationRule: " + from + " -> " + to);
    }
    return to;
  }
}
