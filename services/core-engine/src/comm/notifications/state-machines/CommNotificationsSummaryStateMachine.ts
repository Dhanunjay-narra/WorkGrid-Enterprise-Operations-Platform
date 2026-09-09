export type CommNotificationsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsSummaryStateMachine {
  private allowedTransitions: Record<CommNotificationsSummaryState, CommNotificationsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsSummaryState, to: CommNotificationsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsSummaryState, to: CommNotificationsSummaryState): CommNotificationsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
