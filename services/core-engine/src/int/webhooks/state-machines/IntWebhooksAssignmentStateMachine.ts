export type IntWebhooksAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksAssignmentStateMachine {
  private allowedTransitions: Record<IntWebhooksAssignmentState, IntWebhooksAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksAssignmentState, to: IntWebhooksAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksAssignmentState, to: IntWebhooksAssignmentState): IntWebhooksAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
