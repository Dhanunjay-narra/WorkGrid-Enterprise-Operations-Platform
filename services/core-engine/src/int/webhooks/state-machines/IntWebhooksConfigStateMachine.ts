export type IntWebhooksConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksConfigStateMachine {
  private allowedTransitions: Record<IntWebhooksConfigState, IntWebhooksConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksConfigState, to: IntWebhooksConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksConfigState, to: IntWebhooksConfigState): IntWebhooksConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksConfig: " + from + " -> " + to);
    }
    return to;
  }
}
