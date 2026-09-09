export type IntWebhooksSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksSummaryStateMachine {
  private allowedTransitions: Record<IntWebhooksSummaryState, IntWebhooksSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksSummaryState, to: IntWebhooksSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksSummaryState, to: IntWebhooksSummaryState): IntWebhooksSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksSummary: " + from + " -> " + to);
    }
    return to;
  }
}
