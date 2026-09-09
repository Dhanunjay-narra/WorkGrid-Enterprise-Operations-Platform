export type IntWebhooksBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksBatchStateMachine {
  private allowedTransitions: Record<IntWebhooksBatchState, IntWebhooksBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksBatchState, to: IntWebhooksBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksBatchState, to: IntWebhooksBatchState): IntWebhooksBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksBatch: " + from + " -> " + to);
    }
    return to;
  }
}
