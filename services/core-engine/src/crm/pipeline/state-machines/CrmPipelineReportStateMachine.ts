export type CrmPipelineReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineReportStateMachine {
  private allowedTransitions: Record<CrmPipelineReportState, CrmPipelineReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineReportState, to: CrmPipelineReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineReportState, to: CrmPipelineReportState): CrmPipelineReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineReport: " + from + " -> " + to);
    }
    return to;
  }
}
