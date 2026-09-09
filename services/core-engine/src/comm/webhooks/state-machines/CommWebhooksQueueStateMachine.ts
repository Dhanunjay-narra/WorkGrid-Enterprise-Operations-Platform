export type CommWebhooksQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksQueueStateMachine {
  private allowedTransitions: Record<CommWebhooksQueueState, CommWebhooksQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksQueueState, to: CommWebhooksQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksQueueState, to: CommWebhooksQueueState): CommWebhooksQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksQueue: " + from + " -> " + to);
    }
    return to;
  }
}
