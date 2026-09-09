export type CommWebhooksSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksSessionStateMachine {
  private allowedTransitions: Record<CommWebhooksSessionState, CommWebhooksSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksSessionState, to: CommWebhooksSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksSessionState, to: CommWebhooksSessionState): CommWebhooksSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksSession: " + from + " -> " + to);
    }
    return to;
  }
}
