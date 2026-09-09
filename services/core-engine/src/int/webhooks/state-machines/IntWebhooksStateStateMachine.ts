export type IntWebhooksStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksStateStateMachine {
  private allowedTransitions: Record<IntWebhooksStateState, IntWebhooksStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksStateState, to: IntWebhooksStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksStateState, to: IntWebhooksStateState): IntWebhooksStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksState: " + from + " -> " + to);
    }
    return to;
  }
}
