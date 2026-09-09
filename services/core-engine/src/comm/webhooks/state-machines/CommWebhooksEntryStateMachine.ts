export type CommWebhooksEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksEntryStateMachine {
  private allowedTransitions: Record<CommWebhooksEntryState, CommWebhooksEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksEntryState, to: CommWebhooksEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksEntryState, to: CommWebhooksEntryState): CommWebhooksEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksEntry: " + from + " -> " + to);
    }
    return to;
  }
}
