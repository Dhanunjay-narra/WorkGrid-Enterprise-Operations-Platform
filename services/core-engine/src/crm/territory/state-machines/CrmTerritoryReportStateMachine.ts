export type CrmTerritoryReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryReportStateMachine {
  private allowedTransitions: Record<CrmTerritoryReportState, CrmTerritoryReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryReportState, to: CrmTerritoryReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryReportState, to: CrmTerritoryReportState): CrmTerritoryReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryReport: " + from + " -> " + to);
    }
    return to;
  }
}
