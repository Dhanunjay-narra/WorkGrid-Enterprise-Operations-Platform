export type CommWebhooksPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksPayloadStateMachine {
  private allowedTransitions: Record<CommWebhooksPayloadState, CommWebhooksPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksPayloadState, to: CommWebhooksPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksPayloadState, to: CommWebhooksPayloadState): CommWebhooksPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksPayload: " + from + " -> " + to);
    }
    return to;
  }
}
