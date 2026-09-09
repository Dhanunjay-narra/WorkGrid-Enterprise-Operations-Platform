export type CommWebhooksAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksAssignmentStateMachine {
  private allowedTransitions: Record<CommWebhooksAssignmentState, CommWebhooksAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksAssignmentState, to: CommWebhooksAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksAssignmentState, to: CommWebhooksAssignmentState): CommWebhooksAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
