export type CommWebhooksSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksSummaryStateMachine {
  private allowedTransitions: Record<CommWebhooksSummaryState, CommWebhooksSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksSummaryState, to: CommWebhooksSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksSummaryState, to: CommWebhooksSummaryState): CommWebhooksSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksSummary: " + from + " -> " + to);
    }
    return to;
  }
}
