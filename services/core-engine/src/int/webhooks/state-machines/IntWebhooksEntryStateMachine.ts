export type IntWebhooksEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksEntryStateMachine {
  private allowedTransitions: Record<IntWebhooksEntryState, IntWebhooksEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksEntryState, to: IntWebhooksEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksEntryState, to: IntWebhooksEntryState): IntWebhooksEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksEntry: " + from + " -> " + to);
    }
    return to;
  }
}
