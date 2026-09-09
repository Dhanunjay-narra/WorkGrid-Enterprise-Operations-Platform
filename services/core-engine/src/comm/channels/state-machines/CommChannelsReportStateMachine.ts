export type CommChannelsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsReportStateMachine {
  private allowedTransitions: Record<CommChannelsReportState, CommChannelsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsReportState, to: CommChannelsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsReportState, to: CommChannelsReportState): CommChannelsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsReport: " + from + " -> " + to);
    }
    return to;
  }
}
