export type CommWebhooksEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksEventStateMachine {
  private allowedTransitions: Record<CommWebhooksEventState, CommWebhooksEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksEventState, to: CommWebhooksEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksEventState, to: CommWebhooksEventState): CommWebhooksEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksEvent: " + from + " -> " + to);
    }
    return to;
  }
}
