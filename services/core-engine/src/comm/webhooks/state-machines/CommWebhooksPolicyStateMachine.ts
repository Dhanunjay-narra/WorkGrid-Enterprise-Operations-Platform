export type CommWebhooksPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksPolicyStateMachine {
  private allowedTransitions: Record<CommWebhooksPolicyState, CommWebhooksPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksPolicyState, to: CommWebhooksPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksPolicyState, to: CommWebhooksPolicyState): CommWebhooksPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
