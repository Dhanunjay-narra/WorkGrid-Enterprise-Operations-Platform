export type CommWebhooksRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksRuleStateMachine {
  private allowedTransitions: Record<CommWebhooksRuleState, CommWebhooksRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksRuleState, to: CommWebhooksRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksRuleState, to: CommWebhooksRuleState): CommWebhooksRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksRule: " + from + " -> " + to);
    }
    return to;
  }
}
