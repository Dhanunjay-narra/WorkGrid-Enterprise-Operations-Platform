export type CommWebhooksThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksThresholdStateMachine {
  private allowedTransitions: Record<CommWebhooksThresholdState, CommWebhooksThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksThresholdState, to: CommWebhooksThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksThresholdState, to: CommWebhooksThresholdState): CommWebhooksThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
