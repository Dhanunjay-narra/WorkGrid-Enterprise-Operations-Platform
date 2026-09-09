export type IntWebhooksSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksSessionStateMachine {
  private allowedTransitions: Record<IntWebhooksSessionState, IntWebhooksSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksSessionState, to: IntWebhooksSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksSessionState, to: IntWebhooksSessionState): IntWebhooksSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksSession: " + from + " -> " + to);
    }
    return to;
  }
}
