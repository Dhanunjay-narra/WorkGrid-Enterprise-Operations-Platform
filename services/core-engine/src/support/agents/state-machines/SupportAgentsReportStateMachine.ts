export type SupportAgentsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsReportStateMachine {
  private allowedTransitions: Record<SupportAgentsReportState, SupportAgentsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsReportState, to: SupportAgentsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsReportState, to: SupportAgentsReportState): SupportAgentsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsReport: " + from + " -> " + to);
    }
    return to;
  }
}
