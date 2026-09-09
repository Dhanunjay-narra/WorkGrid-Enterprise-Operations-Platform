export type CommWebhooksConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksConfigStateMachine {
  private allowedTransitions: Record<CommWebhooksConfigState, CommWebhooksConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksConfigState, to: CommWebhooksConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksConfigState, to: CommWebhooksConfigState): CommWebhooksConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksConfig: " + from + " -> " + to);
    }
    return to;
  }
}
