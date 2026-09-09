export type SupportQueuesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesRuleStateMachine {
  private allowedTransitions: Record<SupportQueuesRuleState, SupportQueuesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesRuleState, to: SupportQueuesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesRuleState, to: SupportQueuesRuleState): SupportQueuesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesRule: " + from + " -> " + to);
    }
    return to;
  }
}
