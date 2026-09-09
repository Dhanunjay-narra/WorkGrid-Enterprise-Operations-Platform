export type CommMessagesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesReportStateMachine {
  private allowedTransitions: Record<CommMessagesReportState, CommMessagesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesReportState, to: CommMessagesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesReportState, to: CommMessagesReportState): CommMessagesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesReport: " + from + " -> " + to);
    }
    return to;
  }
}
