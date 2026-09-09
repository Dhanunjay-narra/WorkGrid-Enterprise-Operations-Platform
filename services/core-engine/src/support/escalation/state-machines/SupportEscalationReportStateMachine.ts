export type SupportEscalationReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationReportStateMachine {
  private allowedTransitions: Record<SupportEscalationReportState, SupportEscalationReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationReportState, to: SupportEscalationReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationReportState, to: SupportEscalationReportState): SupportEscalationReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationReport: " + from + " -> " + to);
    }
    return to;
  }
}
