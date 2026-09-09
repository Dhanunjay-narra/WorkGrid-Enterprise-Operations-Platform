export type CommNotificationsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsRuleStateMachine {
  private allowedTransitions: Record<CommNotificationsRuleState, CommNotificationsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsRuleState, to: CommNotificationsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsRuleState, to: CommNotificationsRuleState): CommNotificationsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsRule: " + from + " -> " + to);
    }
    return to;
  }
}
