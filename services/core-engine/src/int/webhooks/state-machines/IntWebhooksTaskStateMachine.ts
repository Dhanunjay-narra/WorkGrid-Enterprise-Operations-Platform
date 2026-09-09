export type IntWebhooksTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksTaskStateMachine {
  private allowedTransitions: Record<IntWebhooksTaskState, IntWebhooksTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksTaskState, to: IntWebhooksTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksTaskState, to: IntWebhooksTaskState): IntWebhooksTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksTask: " + from + " -> " + to);
    }
    return to;
  }
}
