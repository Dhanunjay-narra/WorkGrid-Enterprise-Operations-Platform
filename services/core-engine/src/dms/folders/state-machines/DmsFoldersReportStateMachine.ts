export type DmsFoldersReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersReportStateMachine {
  private allowedTransitions: Record<DmsFoldersReportState, DmsFoldersReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersReportState, to: DmsFoldersReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersReportState, to: DmsFoldersReportState): DmsFoldersReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersReport: " + from + " -> " + to);
    }
    return to;
  }
}
