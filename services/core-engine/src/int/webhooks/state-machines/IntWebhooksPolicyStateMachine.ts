export type IntWebhooksPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksPolicyStateMachine {
  private allowedTransitions: Record<IntWebhooksPolicyState, IntWebhooksPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksPolicyState, to: IntWebhooksPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksPolicyState, to: IntWebhooksPolicyState): IntWebhooksPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
