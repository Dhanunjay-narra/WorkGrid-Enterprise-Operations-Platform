export type CommNotificationsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsReportStateMachine {
  private allowedTransitions: Record<CommNotificationsReportState, CommNotificationsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsReportState, to: CommNotificationsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsReportState, to: CommNotificationsReportState): CommNotificationsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsReport: " + from + " -> " + to);
    }
    return to;
  }
}
