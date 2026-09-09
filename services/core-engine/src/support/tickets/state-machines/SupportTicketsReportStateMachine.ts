export type SupportTicketsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsReportStateMachine {
  private allowedTransitions: Record<SupportTicketsReportState, SupportTicketsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsReportState, to: SupportTicketsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsReportState, to: SupportTicketsReportState): SupportTicketsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsReport: " + from + " -> " + to);
    }
    return to;
  }
}
