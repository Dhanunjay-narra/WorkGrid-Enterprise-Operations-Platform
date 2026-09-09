export type IntWebhooksPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksPayloadStateMachine {
  private allowedTransitions: Record<IntWebhooksPayloadState, IntWebhooksPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksPayloadState, to: IntWebhooksPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksPayloadState, to: IntWebhooksPayloadState): IntWebhooksPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksPayload: " + from + " -> " + to);
    }
    return to;
  }
}
