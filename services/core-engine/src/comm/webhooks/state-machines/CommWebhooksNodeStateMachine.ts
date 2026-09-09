export type CommWebhooksNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksNodeStateMachine {
  private allowedTransitions: Record<CommWebhooksNodeState, CommWebhooksNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksNodeState, to: CommWebhooksNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksNodeState, to: CommWebhooksNodeState): CommWebhooksNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksNode: " + from + " -> " + to);
    }
    return to;
  }
}
