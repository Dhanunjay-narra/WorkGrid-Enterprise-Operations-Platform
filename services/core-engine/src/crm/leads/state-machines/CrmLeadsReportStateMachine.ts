export type CrmLeadsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsReportStateMachine {
  private allowedTransitions: Record<CrmLeadsReportState, CrmLeadsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsReportState, to: CrmLeadsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsReportState, to: CrmLeadsReportState): CrmLeadsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsReport: " + from + " -> " + to);
    }
    return to;
  }
}
