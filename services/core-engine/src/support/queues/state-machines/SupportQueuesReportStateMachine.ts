export type SupportQueuesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesReportStateMachine {
  private allowedTransitions: Record<SupportQueuesReportState, SupportQueuesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesReportState, to: SupportQueuesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesReportState, to: SupportQueuesReportState): SupportQueuesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesReport: " + from + " -> " + to);
    }
    return to;
  }
}
