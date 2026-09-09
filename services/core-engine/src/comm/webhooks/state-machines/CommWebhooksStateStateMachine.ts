export type CommWebhooksStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksStateStateMachine {
  private allowedTransitions: Record<CommWebhooksStateState, CommWebhooksStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksStateState, to: CommWebhooksStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksStateState, to: CommWebhooksStateState): CommWebhooksStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksState: " + from + " -> " + to);
    }
    return to;
  }
}
