export type SupportTicketsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsRuleStateMachine {
  private allowedTransitions: Record<SupportTicketsRuleState, SupportTicketsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsRuleState, to: SupportTicketsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsRuleState, to: SupportTicketsRuleState): SupportTicketsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsRule: " + from + " -> " + to);
    }
    return to;
  }
}
