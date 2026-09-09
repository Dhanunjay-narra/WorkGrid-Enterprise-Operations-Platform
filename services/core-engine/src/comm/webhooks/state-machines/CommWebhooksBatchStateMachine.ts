export type CommWebhooksBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksBatchStateMachine {
  private allowedTransitions: Record<CommWebhooksBatchState, CommWebhooksBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksBatchState, to: CommWebhooksBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksBatchState, to: CommWebhooksBatchState): CommWebhooksBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksBatch: " + from + " -> " + to);
    }
    return to;
  }
}
