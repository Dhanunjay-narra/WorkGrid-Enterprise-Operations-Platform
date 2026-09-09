export type CommPresenceRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceRuleStateMachine {
  private allowedTransitions: Record<CommPresenceRuleState, CommPresenceRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceRuleState, to: CommPresenceRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceRuleState, to: CommPresenceRuleState): CommPresenceRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceRule: " + from + " -> " + to);
    }
    return to;
  }
}
