export type IntWebhooksRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksRuleStateMachine {
  private allowedTransitions: Record<IntWebhooksRuleState, IntWebhooksRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksRuleState, to: IntWebhooksRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksRuleState, to: IntWebhooksRuleState): IntWebhooksRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksRule: " + from + " -> " + to);
    }
    return to;
  }
}
