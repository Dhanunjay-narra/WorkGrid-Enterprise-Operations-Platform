export type CommWebhooksItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksItemStateMachine {
  private allowedTransitions: Record<CommWebhooksItemState, CommWebhooksItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksItemState, to: CommWebhooksItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksItemState, to: CommWebhooksItemState): CommWebhooksItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksItem: " + from + " -> " + to);
    }
    return to;
  }
}
